(function(){
  function createBadge({severity = 'medium', score = '', href = '#', text = ''}) {
    const container = document.createElement('span');
    container.className = 'cvss-badge';

    const link = document.createElement('a');
    link.className = `cvss-score-chip cvss-${severity}`;
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = text || (score ? `CVSS ${score}` : 'CVSS');

    container.appendChild(link);
    return container;
  }

  function normalizeSeverity(s){
    const v = String(s || '').toLowerCase();
    if(['critical','high','medium','low','none'].includes(v)) return v;
    return 'medium';
  }

  class CvssBadge extends HTMLElement {
    connectedCallback(){
      // Attributes: severity, score, href, text
      const severity = normalizeSeverity(this.getAttribute('severity'));
      const score = this.getAttribute('score') || '';
      const href = this.getAttribute('href') || '#';
      const text = this.textContent && this.textContent.trim() ? this.textContent.trim() : '';

      // Clear and render
      this.textContent = '';
      this.appendChild(createBadge({severity, score, href, text}));
    }
  }

  // Aliases like <cvss-critical>, <cvss-high>, etc.
  function defineAlias(tag, fixedSeverity){
    class CvssAlias extends HTMLElement {
      connectedCallback(){
        const score = this.getAttribute('score') || '';
        const href = this.getAttribute('href') || '#';
        const text = this.textContent && this.textContent.trim() ? this.textContent.trim() : '';
        this.textContent = '';
        this.appendChild(createBadge({severity: fixedSeverity, score, href, text}));
      }
    }
    customElements.define(tag, CvssAlias);
  }

  if(!customElements.get('cvss-badge')){
    customElements.define('cvss-badge', CvssBadge);
  }
  defineAlias('cvss-critical', 'critical');
  defineAlias('cvss-high', 'high');
  defineAlias('cvss-medium', 'medium');
  defineAlias('cvss-low', 'low');
  defineAlias('cvss-none', 'none');
})();

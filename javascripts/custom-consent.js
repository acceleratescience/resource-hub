// Enhanced Cross-Domain Cookie Consent System
class CustomCookieConsent {
    constructor() {
        this.consentGiven = false;
        this.analyticsEnabled = false;
        this.consentKey = 'accelerate_docs_consent';
        this.analyticsKey = 'accelerate_docs_analytics';
        this.domain = '.docs.science.ai.cam.ac.uk'; // Scoped to docs only
        
        this.init();
    }
    
    init() {
        // Check for consent in both localStorage and cookies (for cross-domain support)
        const savedConsent = this.getCookieConsent() || localStorage.getItem(this.consentKey);
        const savedAnalytics = this.getCookieAnalytics() || (localStorage.getItem(this.analyticsKey) === 'true');
        
        if (savedConsent) {
            this.consentGiven = true;
            this.analyticsEnabled = savedAnalytics;
            if (this.analyticsEnabled) {
                this.enableAnalytics();
            }
        } else {
            this.showConsentBanner();
        }
        
        this.addChangeSettingsHandler();
    }
    
    // Cookie helpers for cross-domain support
    setCookie(name, value, days = 365) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;domain=${this.domain};SameSite=Lax`;
    }
    
    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    
    getCookieConsent() {
        return this.getCookie(this.consentKey);
    }
    
    getCookieAnalytics() {
        return this.getCookie(this.analyticsKey) === 'true';
    }
    
    saveConsent() {
        // Save to both localStorage and cookies for maximum compatibility
        localStorage.setItem(this.consentKey, 'true');
        localStorage.setItem(this.analyticsKey, this.analyticsEnabled.toString());
        
        // Also save as cookies for cross-subdomain access
        this.setCookie(this.consentKey, 'true');
        this.setCookie(this.analyticsKey, this.analyticsEnabled.toString());
        
        this.consentGiven = true;
    }
    
    showConsentBanner() {
        const existingBanner = document.getElementById('custom-consent-banner');
        if (existingBanner) {
            existingBanner.remove();
        }
        
        const banner = document.createElement('div');
        banner.id = 'custom-consent-banner';
        banner.className = 'custom-consent-banner';
        
        banner.innerHTML = `
            <div class="consent-content">
                <div class="consent-text">
                    <h3>Help us improve our documentation</h3>
                    <p>We use cookies to recognize your repeated visits and preferences, as well as to measure the effectiveness of our documentation and whether users find what they're searching for. With your consent, you're helping us to make our documentation better.</p>
                    <div class="consent-details" id="consent-details" style="display: none;">
                        <div class="cookie-option">
                            <label>
                                <input type="checkbox" id="analytics-checkbox" ${this.analyticsEnabled ? 'checked' : ''}>
                                <span>Google Analytics</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="consent-buttons">
                    <button id="reject-all" class="consent-btn reject">Reject All</button>
                    <button id="manage-btn" class="consent-btn manage">Manage</button>
                    <button id="accept-all" class="consent-btn accept">Accept All</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(banner);
        
        document.getElementById('reject-all').addEventListener('click', () => this.rejectAll());
        document.getElementById('manage-btn').addEventListener('click', () => this.showManageView());
        document.getElementById('accept-all').addEventListener('click', () => this.acceptAll());
    }
    
    showManageView() {
        const details = document.getElementById('consent-details');
        const manageBtn = document.getElementById('manage-btn');
        const acceptBtn = document.getElementById('accept-all');
        
        if (details.style.display === 'none') {
            details.style.display = 'block';
            manageBtn.textContent = 'Hide Details';
            acceptBtn.textContent = 'Accept Changes';
            acceptBtn.onclick = () => this.acceptChanges();
        } else {
            details.style.display = 'none';
            manageBtn.textContent = 'Manage';
            acceptBtn.textContent = 'Accept All';
            acceptBtn.onclick = () => this.acceptAll();
        }
    }
    
    acceptAll() {
        this.analyticsEnabled = true;
        this.saveConsent();
        this.enableAnalytics();
        this.hideConsentBanner();
    }
    
    rejectAll() {
        this.analyticsEnabled = false;
        this.saveConsent();
        this.disableAnalytics();
        this.hideConsentBanner();
    }
    
    acceptChanges() {
        const analyticsCheckbox = document.getElementById('analytics-checkbox');
        this.analyticsEnabled = analyticsCheckbox.checked;
        this.saveConsent();
        
        if (this.analyticsEnabled) {
            this.enableAnalytics();
        } else {
            this.disableAnalytics();
        }
        
        this.hideConsentBanner();
    }
    
    enableAnalytics() {
        if (!window.gtag && this.analyticsEnabled) {
            this.loadGoogleAnalytics();
        }
    }
    
    disableAnalytics() {
        console.log('Analytics disabled by user choice');
    }
    
    loadGoogleAnalytics() {
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-JLGLYJ24SD';
        document.head.appendChild(script1);
        
        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JLGLYJ24SD', {
                anonymize_ip: true
            });
        `;
        document.head.appendChild(script2);
    }
    
    hideConsentBanner() {
        const banner = document.getElementById('custom-consent-banner');
        if (banner) {
            banner.classList.add('fade-out');
            setTimeout(() => banner.remove(), 300);
        }
    }
    
    addChangeSettingsHandler() {
        document.addEventListener('click', (e) => {
            if (e.target.getAttribute('href') === '#__consent') {
                e.preventDefault();
                this.showConsentBanner();
            }
        });
    }
    
    resetConsent() {
        localStorage.removeItem(this.consentKey);
        localStorage.removeItem(this.analyticsKey);
        this.setCookie(this.consentKey, '', -1); // Delete cookie
        this.setCookie(this.analyticsKey, '', -1); // Delete cookie
        location.reload();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CustomCookieConsent();
});

window.customConsent = CustomCookieConsent;

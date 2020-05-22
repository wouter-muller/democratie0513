<footer class="s-footer --r1">
    <div class="l-wrapper">
        <div class="s-footer__main">
            <div>
                <img src="{{ site.image_path }}/logo-footer.svg">
            </div>
            <div>
                <h4 class="s-footer__heading">{{ site.data.monitoren-democratisering.footer.design-title }}</h4>
                {{ site.data.monitoren-democratisering.footer.design-paragraph | markdownify }}
            </div>
            <div>
                <h4 class="s-footer__heading">{{ site.data.monitoren-democratisering.footer.research-title }}</h4>
                {{ site.data.monitoren-democratisering.footer.research-paragraph | markdownify }}
                <h4 class="s-footer__heading u-mt+">{{ site.data.monitoren-democratisering.footer.web-title }}</h4>
                {{ site.data.monitoren-democratisering.footer.web-paragraph | markdownify }}
            </div>
            <div>
                <h4 class="s-footer__heading">{{ site.data.monitoren-democratisering.footer.illustrations-title }}</h4>
                {{ site.data.monitoren-democratisering.footer.illustrations-paragraph | markdownify }}

                <h4 class="s-footer__heading u-mt+">{{ site.data.monitoren-democratisering.footer.photos-title }}</h4>
                {{ site.data.monitoren-democratisering.footer.photos-paragraph | markdownify }}
            </div>

        </div>
    </div>

    <div class="s-footer__sub">
        {{ site.data.monitoren-democratisering.footer.copyright-notice | markdownify }}
    </div>
</footer>

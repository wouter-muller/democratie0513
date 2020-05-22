<footer class="s-footer --r2">
    <div class="l-wrapper">
        <div class="s-footer__main">
            <div>
                <img src="{{ site.image_path }}/r2/logo-footer.svg">
            </div>
            <div>
                <h4 class="s-footer__heading">{{ site.data.gebiedsscans-gezondheid-en-leefomgeving.footer.research-title }}</h4>
                {{ site.data.gebiedsscans-gezondheid-en-leefomgeving.footer.research-paragraph | markdownify }}
            </div>
            <div>
                <h4 class="s-footer__heading">{{ site.data.gebiedsscans-gezondheid-en-leefomgeving.footer.web-title }}</h4>
                {{ site.data.gebiedsscans-gezondheid-en-leefomgeving.footer.web-paragraph | markdownify }}
                <h4 class="s-footer__heading u-mt+">{{ site.data.gebiedsscans-gezondheid-en-leefomgeving.footer.illustrations-title }}</h4>
                {{ site.data.gebiedsscans-gezondheid-en-leefomgeving.footer.illustrations-paragraph | markdownify }}
            </div>
            <div>
                <h4 class="s-footer__heading">{{ site.data.gebiedsscans-gezondheid-en-leefomgeving.footer.photos-title }}</h4>
                {{ site.data.gebiedsscans-gezondheid-en-leefomgeving.footer.photos-paragraph | markdownify }}
            </div>
        </div>
    </div>
    <div class="s-footer__sub">
        {{ site.data.gebiedsscans-gezondheid-en-leefomgeving.footer.copyright-notice | markdownify }}
    </div>
</footer>

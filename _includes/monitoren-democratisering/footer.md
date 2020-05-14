<footer class="s-footer">
    <div class="l-wrapper">

        <div class="s-footer__main">
            <div>
                <img src="{{ site.image_path }}/logo-footer.svg">
            </div>
            <div>
                <h4 class="s-footer__heading">{{ site.data.footer.design-title }}</h4>
                {{ site.data.footer.design-paragraph | markdownify }}

            </div>
            <div>
                <h4 class="s-footer__heading">{{ site.data.footer.research-title }}</h4>
                {{ site.data.footer.research-paragraph | markdownify }}
                <h4 class="s-footer__heading u-mt+">{{ site.data.footer.web-title }}</h4>
                {{ site.data.footer.web-paragraph | markdownify }}
            </div>
            <div>
                <h4 class="s-footer__heading">{{ site.data.footer.illustrations-title }}</h4>
                {{ site.data.footer.illustrations-paragraph | markdownify }}

                <h4 class="s-footer__heading u-mt+">{{ site.data.footer.photos-title }}</h4>
                {{ site.data.footer.photos-paragraph | markdownify }}
            </div>

        </div>
    </div>

    <div class="s-footer__sub">
        {{ site.data.footer.copyright-notice | markdownify }}
    </div>

</footer>

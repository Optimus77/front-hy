import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://github.com/Optimus77"
                              target="_blank">HanYang</a></b> 2018.
      <!--Made with-->
      <!--<b>-->
        <!--<a href="https://akveo.github.io/nebular/?utm_source=ngx-admin&utm_medium=footer_link" target="_blank">-->
        <!--Nebular.-->
        <!--</a>-->
      <!--</b>-->
    </span>
    <!--<div class="socials">-->
      <!--<a href="https://github.com/akveo/ngx-admin" target="_blank" class="ion ion-social-github"></a>-->
      <!--<a href="https://www.facebook.com/akveo/" target="_blank" class="ion ion-social-facebook"></a>-->
      <!--<a href="https://twitter.com/akveo_inc" target="_blank" class="ion ion-social-twitter"></a>-->
      <!--<a href="https://www.linkedin.com/company/akveo" target="_blank" class="ion ion-social-linkedin"></a>-->
    <!--</div>-->
  `,
})
export class FooterComponent {
}

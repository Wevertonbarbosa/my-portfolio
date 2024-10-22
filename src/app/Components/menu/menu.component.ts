import {
  ChangeDetectionStrategy,
  Component,
  inject,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WA_WINDOW } from '@ng-web-apis/common';

import {
  tuiAsPortal,
  TuiPortals,
  TuiRepeatTimes,
  TuiThemeColorService,
} from '@taiga-ui/cdk';
import {
  TuiAppearance,
  TuiButton,
  TuiDropdown,
  TuiDropdownService,
  TuiIcon,
  TuiScrollbar,
  TuiTitle,
  TuiAlertService,
  TuiSurface
} from '@taiga-ui/core';

import {
  TuiAvatar,
  TuiBadge,
  TuiChevron,
  TuiFade,
  TuiSwitch,
  TuiLike,
  TuiLineClamp,
  TuiTabs,
  TuiPin,
} from '@taiga-ui/kit';
import { TuiCardLarge, TuiHeader, TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    FormsModule,
    TuiAvatar,
    TuiScrollbar,
    TuiAppearance,
    TuiSurface,
    TuiBadge,
    TuiLineClamp,
    TuiButton,
    TuiCardLarge,
    TuiChevron,
    TuiDropdown,
    TuiFade,
    TuiHeader,
    TuiIcon,
    TuiNavigation,
    TuiRepeatTimes,
    TuiSwitch,
    TuiTabs,
    TuiLike,
    TuiPin,
    TuiTitle,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDropdownService, tuiAsPortal(TuiDropdownService)],
})
export class MenuComponent extends TuiPortals {
  protected a = false;
  protected b = false;
  protected c = true;
  protected d = false;
  private readonly alerts = inject(TuiAlertService);
  protected color = false;
  private readonly win = inject(WA_WINDOW);

  constructor() {
    super();
  }

  protected getDynamicLineHeight(element: HTMLDivElement): number {
    return parseInt(this.win.getComputedStyle(element).lineHeight, 10);
  }

  protected getDynamicLineLimit(element: HTMLDivElement): number {
    return Math.floor(element.offsetHeight / 24);
  }

  protected showNotification(): void {
    this.alerts
      .open(
        '<i>Me mande uma mensagem!</i>',
        {
          label: 'Obrigado por curtir!',
          appearance: 'success',
        }
      )
      .subscribe();
  }
}

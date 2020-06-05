import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopWomensPage } from './shop-womens.page';

describe('ShopWomensPage', () => {
  let component: ShopWomensPage;
  let fixture: ComponentFixture<ShopWomensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopWomensPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopWomensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

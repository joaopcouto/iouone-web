import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCadastroComponent } from './navbar-cadastro.component';

describe('NavbarCadastroComponent', () => {
  let component: NavbarCadastroComponent;
  let fixture: ComponentFixture<NavbarCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarCadastroComponent]
    });
    fixture = TestBed.createComponent(NavbarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarProdutosComponent } from './gerenciar-produtos.component';

describe('GerenciarProdutosComponent', () => {
  let component: GerenciarProdutosComponent;
  let fixture: ComponentFixture<GerenciarProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModalidadeComponent } from './list-modalidade.component';

describe('ListModalidadeComponent', () => {
  let component: ListModalidadeComponent;
  let fixture: ComponentFixture<ListModalidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListModalidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListModalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

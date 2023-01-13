import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPensamntoComponent } from './listar-pensamento.component';

describe('ListarPensamntoComponent', () => {
  let component: ListarPensamntoComponent;
  let fixture: ComponentFixture<ListarPensamntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarPensamntoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarPensamntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

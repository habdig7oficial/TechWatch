import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechExpandPage } from './tech-expand.page';

describe('TechExpandPage', () => {
  let component: TechExpandPage;
  let fixture: ComponentFixture<TechExpandPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TechExpandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

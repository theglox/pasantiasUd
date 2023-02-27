import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablapazysalvosComponent } from './tablapazysalvos.component';

describe('TablapazysalvosComponent', () => {
  let component: TablapazysalvosComponent;
  let fixture: ComponentFixture<TablapazysalvosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablapazysalvosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablapazysalvosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

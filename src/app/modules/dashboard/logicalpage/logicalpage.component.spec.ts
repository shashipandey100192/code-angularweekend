import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicalpageComponent } from './logicalpage.component';

describe('LogicalpageComponent', () => {
  let component: LogicalpageComponent;
  let fixture: ComponentFixture<LogicalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogicalpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogicalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsHomeComponentComponent } from './views-home-component.component';

describe('ViewsHomeComponentComponent', () => {
  let component: ViewsHomeComponentComponent;
  let fixture: ComponentFixture<ViewsHomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsHomeComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewsHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

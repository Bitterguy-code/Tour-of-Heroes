import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent, RouterModule.forRoot([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Having issues w/ httpClientProvider and RouterProvider
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Dashboard Component (minimal)', () => {
    it('should create', () => {
      expect(component).toBeDefined();
    })

    it('should have <button> with "Bombasto"', () => {
      const dashboardElement = fixture.nativeElement;
      const button = dashboardElement.querySelector('button')!;
      expect(button.textContent).toEqual('Bombasto');
    })
  })
});

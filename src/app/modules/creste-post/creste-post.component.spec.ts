import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrestePostComponent } from './creste-post.component';

describe('CrestePostComponent', () => {
  let component: CrestePostComponent;
  let fixture: ComponentFixture<CrestePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrestePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrestePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

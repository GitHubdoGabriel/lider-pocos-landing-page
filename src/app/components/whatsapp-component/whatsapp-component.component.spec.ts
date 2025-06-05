import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappComponentComponent } from './whatsapp-component.component';

describe('WhatsappComponentComponent', () => {
  let component: WhatsappComponentComponent;
  let fixture: ComponentFixture<WhatsappComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsappComponentComponent]
    });
    fixture = TestBed.createComponent(WhatsappComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

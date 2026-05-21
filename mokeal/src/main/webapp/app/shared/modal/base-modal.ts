import { Component, Input, OnInit, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-base-modal',
  templateUrl: './base-modal.html',
  styleUrl: './base-modal.scss',
  imports: [NgClass, NgIf],
  standalone: true,
})
export class BaseModalComponent implements OnInit {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() icon = '📋';
  @Input() mode: 'create' | 'edit' | 'view' = 'create';
  @Input() showDelete = false;
  @Input() contentComponent: any;
  @Input() contentData: any = {};
  @Input() onSave: (() => void | Promise<void>) | null = null;
  @Input() onDelete: (() => void | Promise<void>) | null = null;
  @Input() onCancel: (() => void) | null = null;

  @ViewChild('contentHost', { read: ViewContainerRef, static: true })
  contentHost!: ViewContainerRef;

  isSaving = false;
  isDeleting = false;
  confirmDelete = false;

  activeModal = inject(NgbActiveModal);

  ngOnInit(): void {
    if (this.contentComponent) {
      const ref = this.contentHost.createComponent(this.contentComponent);
      // Pasar datos al componente hijo
      Object.assign(ref.instance as object, this.contentData);
    }
  }

  get modalTitle(): string {
    const prefix = this.mode === 'create' ? 'Nuevo' : this.mode === 'edit' ? 'Editar' : '';
    return prefix ? `${prefix} ${this.title}` : this.title;
  }

  get saveLabel(): string {
    if (this.isSaving) return 'Guardando...';
    return this.mode === 'create' ? 'Crear' : 'Guardar cambios';
  }

  async save(): Promise<void> {
    if (this.isSaving) return;
    this.isSaving = true;
    try {
      if (this.onSave) await this.onSave();
    } finally {
      this.isSaving = false;
    }
  }

  async confirmAndDelete(): Promise<void> {
    if (!this.confirmDelete) {
      this.confirmDelete = true;
      setTimeout(() => {
        this.confirmDelete = false;
      }, 3000);
      return;
    }
    if (this.isDeleting) return;
    this.isDeleting = true;
    try {
      if (this.onDelete) await this.onDelete();
    } finally {
      this.isDeleting = false;
      this.confirmDelete = false;
    }
  }

  cancel(): void {
    if (this.onCancel) this.onCancel();
    else this.activeModal.dismiss();
  }
}

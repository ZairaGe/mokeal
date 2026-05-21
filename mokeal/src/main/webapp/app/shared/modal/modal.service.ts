import { Injectable, inject } from '@angular/core';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { BaseModalComponent } from './base-modal';

export interface ModalConfig {
  title: string;
  subtitle?: string;
  icon?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  mode?: 'create' | 'edit' | 'view';
  showDelete?: boolean;
  data?: any;
  onSave?: () => void | Promise<void>;
  onDelete?: () => void | Promise<void>;
  onCancel?: () => void;
}

@Injectable({ providedIn: 'root' })
export class ModalService {
  private ngbModal = inject(NgbModal);
  private activeModal: NgbModalRef | null = null;

  open(contentComponent: any, config: ModalConfig): NgbModalRef {
    const options: NgbModalOptions = {
      size: config.size ?? 'lg',
      centered: true,
      backdrop: 'static',
      keyboard: false,
      windowClass: 'mokeal-modal',
    };

    this.activeModal = this.ngbModal.open(BaseModalComponent, options);

    const instance = this.activeModal.componentInstance as BaseModalComponent;
    instance.title = config.title;
    instance.subtitle = config.subtitle ?? '';
    instance.icon = config.icon ?? '📋';
    instance.mode = config.mode ?? 'create';
    instance.showDelete = config.showDelete ?? false;
    instance.contentComponent = contentComponent;
    instance.contentData = config.data ?? {};

    instance.onSave = async () => {
      if (config.onSave) await config.onSave();
    };

    instance.onDelete = async () => {
      if (config.onDelete) await config.onDelete();
    };

    instance.onCancel = () => {
      if (config.onCancel) config.onCancel();
      this.close();
    };

    return this.activeModal;
  }

  close(): void {
    if (this.activeModal) {
      this.activeModal.close();
      this.activeModal = null;
    }
  }

  dismiss(): void {
    if (this.activeModal) {
      this.activeModal.dismiss();
      this.activeModal = null;
    }
  }
}

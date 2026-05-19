import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import { LoginService } from 'app/login/login.service';
import { DecimalPipe, NgClass } from '@angular/common';
import { TarifaService } from 'app/entities/tarifa/service/tarifa.service';
import { ITarifa } from 'app/entities/tarifa/tarifa.model';
import { FacturaService } from 'app/entities/factura/service/factura.service';
import { IFactura } from 'app/entities/factura/factura.model';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [RouterModule, NgClass, DecimalPipe],
})
export default class HomeComponent implements OnInit {
  account = signal<Account | null>(null);
  activeTab = 'hoy';
  tarifas = signal<ITarifa[]>([]);
  facturas = signal<IFactura[]>([]);
  private facturaService = inject(FacturaService);
  private tarifaService = inject(TarifaService);

  private accountService = inject(AccountService);
  private loginService = inject(LoginService);
  private router = inject(Router);

  ngOnInit(): void {
    this.accountService.identity().subscribe(account => {
      this.account.set(account);
      if (account) {
        this.tarifaService.query().subscribe(res => {
          this.tarifas.set(res.body ?? []);
          this.facturaService.query().subscribe(res => {
            this.facturas.set(res.body ?? []);
          });
        });
      }
    });
  }

  setTab(tab: string): void {
    this.activeTab = tab;
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  getTipoLabel(tipo: string | null | undefined): string {
    const labels: Record<string, string> = {
      HOGAR: 'Hogar / Piso',
      OFICINA: 'Oficina / Local',
      CHALET: 'Chalet',
      EVENTO: 'Evento',
      POST_OBRA: 'Post-obra',
      POST_MUDANZA: 'Post-mudanza',
    };
    return tipo ? (labels[tipo] ?? tipo) : '—';
  }

  getZonaLabel(zona: string): string {
    const labels: Record<string, string> = {
      MADRID_CAPITAL: 'Madrid Capital',
      COMUNIDAD_MADRID: 'Comunidad de Madrid',
      FUERA_COMUNIDAD: 'Fuera de la Comunidad',
    };
    return labels[zona] ?? zona;
  }

  getZonaClass(zona: string): string {
    return { MADRID_CAPITAL: 'zona-madrid', COMUNIDAD_MADRID: 'zona-fuera', FUERA_COMUNIDAD: 'zona-evento' }[zona] ?? '';
  }

  getZonaBadgeClass(zona: string): string {
    return { MADRID_CAPITAL: 'badge-madrid', COMUNIDAD_MADRID: 'badge-fuera', FUERA_COMUNIDAD: 'badge-evento' }[zona] ?? '';
  }

  getTarifasPorZona(zona: string): ITarifa[] {
    return this.tarifas().filter(t => t.zona === zona);
  }
  getTotalFacturado(): number {
    return this.facturas().reduce((acc, f) => acc + (Number(f.total) || 0), 0);
  }

  getTotalCobrado(): number {
    return this.facturas()
      .filter(f => f.estado === 'PAGADA')
      .reduce((acc, f) => acc + (Number(f.total) || 0), 0);
  }

  getTotalPendiente(): number {
    return this.facturas()
      .filter(f => f.estado === 'EMITIDA' || f.estado === 'BORRADOR')
      .reduce((acc, f) => acc + (Number(f.total) || 0), 0);
  }

  getFacturaEstadoLabel(estado: string | null | undefined): string {
    const labels: Record<string, string> = {
      BORRADOR: 'Borrador',
      EMITIDA: 'Emitida',
      PAGADA: 'Pagada',
      CANCELADA: 'Cancelada',
    };
    return estado ? (labels[estado] ?? estado) : '—';
  }

  getFacturaBadgeClass(estado: string | null | undefined): string {
    const classes: Record<string, string> = {
      BORRADOR: 'b-pendiente',
      EMITIDA: 'b-fuera',
      PAGADA: 'b-confirmado',
      CANCELADA: 'b-pendiente',
    };
    return estado ? (classes[estado] ?? '') : '';
  }
}

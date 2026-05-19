package com.mokeal.mokeal.service.mapper;

import com.mokeal.mokeal.domain.Cliente;
import com.mokeal.mokeal.domain.Factura;
import com.mokeal.mokeal.domain.Servicio;
import com.mokeal.mokeal.domain.Tarifa;
import com.mokeal.mokeal.domain.Trabajador;
import com.mokeal.mokeal.service.dto.ClienteDTO;
import com.mokeal.mokeal.service.dto.FacturaDTO;
import com.mokeal.mokeal.service.dto.ServicioDTO;
import com.mokeal.mokeal.service.dto.TarifaDTO;
import com.mokeal.mokeal.service.dto.TrabajadorDTO;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-05-19T14:40:53+0200",
    comments = "version: 1.6.3, compiler: javac, environment: Java 21.0.10 (Eclipse Adoptium)"
)
@Component
public class FacturaMapperImpl implements FacturaMapper {

    @Override
    public Factura toEntity(FacturaDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Factura factura = new Factura();

        factura.setId( dto.getId() );
        factura.setNumero( dto.getNumero() );
        factura.setFechaEmision( dto.getFechaEmision() );
        factura.setFechaVencimiento( dto.getFechaVencimiento() );
        factura.setBaseImponible( dto.getBaseImponible() );
        factura.setIva( dto.getIva() );
        factura.setTotal( dto.getTotal() );
        factura.setEstado( dto.getEstado() );
        factura.setNotas( dto.getNotas() );
        factura.servicio( servicioDTOToServicio( dto.getServicio() ) );
        factura.cliente( clienteDTOToCliente( dto.getCliente() ) );

        return factura;
    }

    @Override
    public List<Factura> toEntity(List<FacturaDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Factura> list = new ArrayList<Factura>( dtoList.size() );
        for ( FacturaDTO facturaDTO : dtoList ) {
            list.add( toEntity( facturaDTO ) );
        }

        return list;
    }

    @Override
    public List<FacturaDTO> toDto(List<Factura> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<FacturaDTO> list = new ArrayList<FacturaDTO>( entityList.size() );
        for ( Factura factura : entityList ) {
            list.add( toDto( factura ) );
        }

        return list;
    }

    @Override
    public void partialUpdate(Factura entity, FacturaDTO dto) {
        if ( dto == null ) {
            return;
        }

        if ( dto.getId() != null ) {
            entity.setId( dto.getId() );
        }
        if ( dto.getNumero() != null ) {
            entity.setNumero( dto.getNumero() );
        }
        if ( dto.getFechaEmision() != null ) {
            entity.setFechaEmision( dto.getFechaEmision() );
        }
        if ( dto.getFechaVencimiento() != null ) {
            entity.setFechaVencimiento( dto.getFechaVencimiento() );
        }
        if ( dto.getBaseImponible() != null ) {
            entity.setBaseImponible( dto.getBaseImponible() );
        }
        if ( dto.getIva() != null ) {
            entity.setIva( dto.getIva() );
        }
        if ( dto.getTotal() != null ) {
            entity.setTotal( dto.getTotal() );
        }
        if ( dto.getEstado() != null ) {
            entity.setEstado( dto.getEstado() );
        }
        if ( dto.getNotas() != null ) {
            entity.setNotas( dto.getNotas() );
        }
        if ( dto.getServicio() != null ) {
            if ( entity.getServicio() == null ) {
                entity.servicio( new Servicio() );
            }
            servicioDTOToServicio1( dto.getServicio(), entity.getServicio() );
        }
        if ( dto.getCliente() != null ) {
            if ( entity.getCliente() == null ) {
                entity.cliente( new Cliente() );
            }
            clienteDTOToCliente1( dto.getCliente(), entity.getCliente() );
        }
    }

    @Override
    public FacturaDTO toDto(Factura s) {
        if ( s == null ) {
            return null;
        }

        FacturaDTO facturaDTO = new FacturaDTO();

        facturaDTO.setServicio( toDtoServicioId( s.getServicio() ) );
        facturaDTO.setCliente( toDtoClienteId( s.getCliente() ) );
        facturaDTO.setId( s.getId() );
        facturaDTO.setNumero( s.getNumero() );
        facturaDTO.setFechaEmision( s.getFechaEmision() );
        facturaDTO.setFechaVencimiento( s.getFechaVencimiento() );
        facturaDTO.setBaseImponible( s.getBaseImponible() );
        facturaDTO.setIva( s.getIva() );
        facturaDTO.setTotal( s.getTotal() );
        facturaDTO.setEstado( s.getEstado() );
        facturaDTO.setNotas( s.getNotas() );

        return facturaDTO;
    }

    @Override
    public ServicioDTO toDtoServicioId(Servicio servicio) {
        if ( servicio == null ) {
            return null;
        }

        ServicioDTO servicioDTO = new ServicioDTO();

        servicioDTO.setId( servicio.getId() );

        return servicioDTO;
    }

    @Override
    public ClienteDTO toDtoClienteId(Cliente cliente) {
        if ( cliente == null ) {
            return null;
        }

        ClienteDTO clienteDTO = new ClienteDTO();

        clienteDTO.setId( cliente.getId() );

        return clienteDTO;
    }

    protected Cliente clienteDTOToCliente(ClienteDTO clienteDTO) {
        if ( clienteDTO == null ) {
            return null;
        }

        Cliente cliente = new Cliente();

        cliente.setId( clienteDTO.getId() );
        cliente.setNombre( clienteDTO.getNombre() );
        cliente.setTelefono( clienteDTO.getTelefono() );
        cliente.setEmail( clienteDTO.getEmail() );
        cliente.setNifCif( clienteDTO.getNifCif() );
        cliente.setDireccion( clienteDTO.getDireccion() );
        cliente.setMunicipio( clienteDTO.getMunicipio() );
        cliente.setCodigoPostal( clienteDTO.getCodigoPostal() );
        cliente.setNotas( clienteDTO.getNotas() );
        cliente.setActivo( clienteDTO.getActivo() );

        return cliente;
    }

    protected Tarifa tarifaDTOToTarifa(TarifaDTO tarifaDTO) {
        if ( tarifaDTO == null ) {
            return null;
        }

        Tarifa tarifa = new Tarifa();

        tarifa.setId( tarifaDTO.getId() );
        tarifa.setZona( tarifaDTO.getZona() );
        tarifa.setTipoServicio( tarifaDTO.getTipoServicio() );
        tarifa.setPrecioFirstHora( tarifaDTO.getPrecioFirstHora() );
        tarifa.setPrecioHoraAdicional( tarifaDTO.getPrecioHoraAdicional() );
        tarifa.setMinimoHoras( tarifaDTO.getMinimoHoras() );
        tarifa.setPrecioPorKm( tarifaDTO.getPrecioPorKm() );
        tarifa.setActiva( tarifaDTO.getActiva() );

        return tarifa;
    }

    protected Set<Servicio> servicioDTOSetToServicioSet(Set<ServicioDTO> set) {
        if ( set == null ) {
            return null;
        }

        Set<Servicio> set1 = LinkedHashSet.newLinkedHashSet( set.size() );
        for ( ServicioDTO servicioDTO : set ) {
            set1.add( servicioDTOToServicio( servicioDTO ) );
        }

        return set1;
    }

    protected Trabajador trabajadorDTOToTrabajador(TrabajadorDTO trabajadorDTO) {
        if ( trabajadorDTO == null ) {
            return null;
        }

        Trabajador trabajador = new Trabajador();

        trabajador.setId( trabajadorDTO.getId() );
        trabajador.setNombre( trabajadorDTO.getNombre() );
        trabajador.setTelefono( trabajadorDTO.getTelefono() );
        trabajador.setEmail( trabajadorDTO.getEmail() );
        trabajador.setActivo( trabajadorDTO.getActivo() );
        trabajador.setNotas( trabajadorDTO.getNotas() );
        trabajador.servicioses( servicioDTOSetToServicioSet( trabajadorDTO.getServicioses() ) );

        return trabajador;
    }

    protected Set<Trabajador> trabajadorDTOSetToTrabajadorSet(Set<TrabajadorDTO> set) {
        if ( set == null ) {
            return null;
        }

        Set<Trabajador> set1 = LinkedHashSet.newLinkedHashSet( set.size() );
        for ( TrabajadorDTO trabajadorDTO : set ) {
            set1.add( trabajadorDTOToTrabajador( trabajadorDTO ) );
        }

        return set1;
    }

    protected Servicio servicioDTOToServicio(ServicioDTO servicioDTO) {
        if ( servicioDTO == null ) {
            return null;
        }

        Servicio servicio = new Servicio();

        servicio.setId( servicioDTO.getId() );
        servicio.setTipoServicio( servicioDTO.getTipoServicio() );
        servicio.setZona( servicioDTO.getZona() );
        servicio.setFrecuencia( servicioDTO.getFrecuencia() );
        servicio.setFecha( servicioDTO.getFecha() );
        servicio.setHoraInicio( servicioDTO.getHoraInicio() );
        servicio.setDuracionHoras( servicioDTO.getDuracionHoras() );
        servicio.setNumTrabajadores( servicioDTO.getNumTrabajadores() );
        servicio.setEstado( servicioDTO.getEstado() );
        servicio.setDireccion( servicioDTO.getDireccion() );
        servicio.setMunicipio( servicioDTO.getMunicipio() );
        servicio.setNotas( servicioDTO.getNotas() );
        servicio.setPrecioTotal( servicioDTO.getPrecioTotal() );
        servicio.setDescuento( servicioDTO.getDescuento() );
        servicio.cliente( clienteDTOToCliente( servicioDTO.getCliente() ) );
        servicio.tarifa( tarifaDTOToTarifa( servicioDTO.getTarifa() ) );
        servicio.trabajadoreses( trabajadorDTOSetToTrabajadorSet( servicioDTO.getTrabajadoreses() ) );

        return servicio;
    }

    protected void clienteDTOToCliente1(ClienteDTO clienteDTO, Cliente mappingTarget) {
        if ( clienteDTO == null ) {
            return;
        }

        if ( clienteDTO.getId() != null ) {
            mappingTarget.setId( clienteDTO.getId() );
        }
        if ( clienteDTO.getNombre() != null ) {
            mappingTarget.setNombre( clienteDTO.getNombre() );
        }
        if ( clienteDTO.getTelefono() != null ) {
            mappingTarget.setTelefono( clienteDTO.getTelefono() );
        }
        if ( clienteDTO.getEmail() != null ) {
            mappingTarget.setEmail( clienteDTO.getEmail() );
        }
        if ( clienteDTO.getNifCif() != null ) {
            mappingTarget.setNifCif( clienteDTO.getNifCif() );
        }
        if ( clienteDTO.getDireccion() != null ) {
            mappingTarget.setDireccion( clienteDTO.getDireccion() );
        }
        if ( clienteDTO.getMunicipio() != null ) {
            mappingTarget.setMunicipio( clienteDTO.getMunicipio() );
        }
        if ( clienteDTO.getCodigoPostal() != null ) {
            mappingTarget.setCodigoPostal( clienteDTO.getCodigoPostal() );
        }
        if ( clienteDTO.getNotas() != null ) {
            mappingTarget.setNotas( clienteDTO.getNotas() );
        }
        if ( clienteDTO.getActivo() != null ) {
            mappingTarget.setActivo( clienteDTO.getActivo() );
        }
    }

    protected void tarifaDTOToTarifa1(TarifaDTO tarifaDTO, Tarifa mappingTarget) {
        if ( tarifaDTO == null ) {
            return;
        }

        if ( tarifaDTO.getId() != null ) {
            mappingTarget.setId( tarifaDTO.getId() );
        }
        if ( tarifaDTO.getZona() != null ) {
            mappingTarget.setZona( tarifaDTO.getZona() );
        }
        if ( tarifaDTO.getTipoServicio() != null ) {
            mappingTarget.setTipoServicio( tarifaDTO.getTipoServicio() );
        }
        if ( tarifaDTO.getPrecioFirstHora() != null ) {
            mappingTarget.setPrecioFirstHora( tarifaDTO.getPrecioFirstHora() );
        }
        if ( tarifaDTO.getPrecioHoraAdicional() != null ) {
            mappingTarget.setPrecioHoraAdicional( tarifaDTO.getPrecioHoraAdicional() );
        }
        if ( tarifaDTO.getMinimoHoras() != null ) {
            mappingTarget.setMinimoHoras( tarifaDTO.getMinimoHoras() );
        }
        if ( tarifaDTO.getPrecioPorKm() != null ) {
            mappingTarget.setPrecioPorKm( tarifaDTO.getPrecioPorKm() );
        }
        if ( tarifaDTO.getActiva() != null ) {
            mappingTarget.setActiva( tarifaDTO.getActiva() );
        }
    }

    protected void servicioDTOToServicio1(ServicioDTO servicioDTO, Servicio mappingTarget) {
        if ( servicioDTO == null ) {
            return;
        }

        if ( servicioDTO.getId() != null ) {
            mappingTarget.setId( servicioDTO.getId() );
        }
        if ( servicioDTO.getTipoServicio() != null ) {
            mappingTarget.setTipoServicio( servicioDTO.getTipoServicio() );
        }
        if ( servicioDTO.getZona() != null ) {
            mappingTarget.setZona( servicioDTO.getZona() );
        }
        if ( servicioDTO.getFrecuencia() != null ) {
            mappingTarget.setFrecuencia( servicioDTO.getFrecuencia() );
        }
        if ( servicioDTO.getFecha() != null ) {
            mappingTarget.setFecha( servicioDTO.getFecha() );
        }
        if ( servicioDTO.getHoraInicio() != null ) {
            mappingTarget.setHoraInicio( servicioDTO.getHoraInicio() );
        }
        if ( servicioDTO.getDuracionHoras() != null ) {
            mappingTarget.setDuracionHoras( servicioDTO.getDuracionHoras() );
        }
        if ( servicioDTO.getNumTrabajadores() != null ) {
            mappingTarget.setNumTrabajadores( servicioDTO.getNumTrabajadores() );
        }
        if ( servicioDTO.getEstado() != null ) {
            mappingTarget.setEstado( servicioDTO.getEstado() );
        }
        if ( servicioDTO.getDireccion() != null ) {
            mappingTarget.setDireccion( servicioDTO.getDireccion() );
        }
        if ( servicioDTO.getMunicipio() != null ) {
            mappingTarget.setMunicipio( servicioDTO.getMunicipio() );
        }
        if ( servicioDTO.getNotas() != null ) {
            mappingTarget.setNotas( servicioDTO.getNotas() );
        }
        if ( servicioDTO.getPrecioTotal() != null ) {
            mappingTarget.setPrecioTotal( servicioDTO.getPrecioTotal() );
        }
        if ( servicioDTO.getDescuento() != null ) {
            mappingTarget.setDescuento( servicioDTO.getDescuento() );
        }
        if ( servicioDTO.getCliente() != null ) {
            if ( mappingTarget.getCliente() == null ) {
                mappingTarget.cliente( new Cliente() );
            }
            clienteDTOToCliente1( servicioDTO.getCliente(), mappingTarget.getCliente() );
        }
        if ( servicioDTO.getTarifa() != null ) {
            if ( mappingTarget.getTarifa() == null ) {
                mappingTarget.tarifa( new Tarifa() );
            }
            tarifaDTOToTarifa1( servicioDTO.getTarifa(), mappingTarget.getTarifa() );
        }
        if ( mappingTarget.getTrabajadoreses() != null ) {
            Set<Trabajador> set = trabajadorDTOSetToTrabajadorSet( servicioDTO.getTrabajadoreses() );
            if ( set != null ) {
                mappingTarget.getTrabajadoreses().clear();
                mappingTarget.getTrabajadoreses().addAll( set );
            }
        }
        else {
            Set<Trabajador> set = trabajadorDTOSetToTrabajadorSet( servicioDTO.getTrabajadoreses() );
            if ( set != null ) {
                mappingTarget.trabajadoreses( set );
            }
        }
    }
}

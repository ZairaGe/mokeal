package com.mokeal.mokeal.service.mapper;

import com.mokeal.mokeal.domain.Cliente;
import com.mokeal.mokeal.domain.Servicio;
import com.mokeal.mokeal.domain.Tarifa;
import com.mokeal.mokeal.domain.Trabajador;
import com.mokeal.mokeal.service.dto.ClienteDTO;
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
public class ServicioMapperImpl implements ServicioMapper {

    @Override
    public List<Servicio> toEntity(List<ServicioDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Servicio> list = new ArrayList<Servicio>( dtoList.size() );
        for ( ServicioDTO servicioDTO : dtoList ) {
            list.add( toEntity( servicioDTO ) );
        }

        return list;
    }

    @Override
    public List<ServicioDTO> toDto(List<Servicio> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<ServicioDTO> list = new ArrayList<ServicioDTO>( entityList.size() );
        for ( Servicio servicio : entityList ) {
            list.add( toDto( servicio ) );
        }

        return list;
    }

    @Override
    public void partialUpdate(Servicio entity, ServicioDTO dto) {
        if ( dto == null ) {
            return;
        }

        if ( dto.getId() != null ) {
            entity.setId( dto.getId() );
        }
        if ( dto.getTipoServicio() != null ) {
            entity.setTipoServicio( dto.getTipoServicio() );
        }
        if ( dto.getZona() != null ) {
            entity.setZona( dto.getZona() );
        }
        if ( dto.getFrecuencia() != null ) {
            entity.setFrecuencia( dto.getFrecuencia() );
        }
        if ( dto.getFecha() != null ) {
            entity.setFecha( dto.getFecha() );
        }
        if ( dto.getHoraInicio() != null ) {
            entity.setHoraInicio( dto.getHoraInicio() );
        }
        if ( dto.getDuracionHoras() != null ) {
            entity.setDuracionHoras( dto.getDuracionHoras() );
        }
        if ( dto.getNumTrabajadores() != null ) {
            entity.setNumTrabajadores( dto.getNumTrabajadores() );
        }
        if ( dto.getEstado() != null ) {
            entity.setEstado( dto.getEstado() );
        }
        if ( dto.getDireccion() != null ) {
            entity.setDireccion( dto.getDireccion() );
        }
        if ( dto.getMunicipio() != null ) {
            entity.setMunicipio( dto.getMunicipio() );
        }
        if ( dto.getNotas() != null ) {
            entity.setNotas( dto.getNotas() );
        }
        if ( dto.getPrecioTotal() != null ) {
            entity.setPrecioTotal( dto.getPrecioTotal() );
        }
        if ( dto.getDescuento() != null ) {
            entity.setDescuento( dto.getDescuento() );
        }
        if ( dto.getCliente() != null ) {
            if ( entity.getCliente() == null ) {
                entity.cliente( new Cliente() );
            }
            clienteDTOToCliente( dto.getCliente(), entity.getCliente() );
        }
        if ( dto.getTarifa() != null ) {
            if ( entity.getTarifa() == null ) {
                entity.tarifa( new Tarifa() );
            }
            tarifaDTOToTarifa( dto.getTarifa(), entity.getTarifa() );
        }
        if ( entity.getTrabajadoreses() != null ) {
            Set<Trabajador> set = trabajadorDTOSetToTrabajadorSet( dto.getTrabajadoreses() );
            if ( set != null ) {
                entity.getTrabajadoreses().clear();
                entity.getTrabajadoreses().addAll( set );
            }
        }
        else {
            Set<Trabajador> set = trabajadorDTOSetToTrabajadorSet( dto.getTrabajadoreses() );
            if ( set != null ) {
                entity.trabajadoreses( set );
            }
        }
    }

    @Override
    public ServicioDTO toDto(Servicio s) {
        if ( s == null ) {
            return null;
        }

        ServicioDTO servicioDTO = new ServicioDTO();

        servicioDTO.setCliente( toDtoClienteId( s.getCliente() ) );
        servicioDTO.setTarifa( toDtoTarifaId( s.getTarifa() ) );
        servicioDTO.setTrabajadoreses( toDtoTrabajadorIdSet( s.getTrabajadoreses() ) );
        servicioDTO.setId( s.getId() );
        servicioDTO.setTipoServicio( s.getTipoServicio() );
        servicioDTO.setZona( s.getZona() );
        servicioDTO.setFrecuencia( s.getFrecuencia() );
        servicioDTO.setFecha( s.getFecha() );
        servicioDTO.setHoraInicio( s.getHoraInicio() );
        servicioDTO.setDuracionHoras( s.getDuracionHoras() );
        servicioDTO.setNumTrabajadores( s.getNumTrabajadores() );
        servicioDTO.setEstado( s.getEstado() );
        servicioDTO.setDireccion( s.getDireccion() );
        servicioDTO.setMunicipio( s.getMunicipio() );
        servicioDTO.setNotas( s.getNotas() );
        servicioDTO.setPrecioTotal( s.getPrecioTotal() );
        servicioDTO.setDescuento( s.getDescuento() );

        return servicioDTO;
    }

    @Override
    public Servicio toEntity(ServicioDTO servicioDTO) {
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
        servicio.cliente( clienteDTOToCliente1( servicioDTO.getCliente() ) );
        servicio.tarifa( tarifaDTOToTarifa1( servicioDTO.getTarifa() ) );
        servicio.trabajadoreses( trabajadorDTOSetToTrabajadorSet( servicioDTO.getTrabajadoreses() ) );

        return servicio;
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

    @Override
    public TarifaDTO toDtoTarifaId(Tarifa tarifa) {
        if ( tarifa == null ) {
            return null;
        }

        TarifaDTO tarifaDTO = new TarifaDTO();

        tarifaDTO.setId( tarifa.getId() );

        return tarifaDTO;
    }

    @Override
    public TrabajadorDTO toDtoTrabajadorId(Trabajador trabajador) {
        if ( trabajador == null ) {
            return null;
        }

        TrabajadorDTO trabajadorDTO = new TrabajadorDTO();

        trabajadorDTO.setId( trabajador.getId() );

        return trabajadorDTO;
    }

    protected void clienteDTOToCliente(ClienteDTO clienteDTO, Cliente mappingTarget) {
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

    protected void tarifaDTOToTarifa(TarifaDTO tarifaDTO, Tarifa mappingTarget) {
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

    protected Set<Servicio> servicioDTOSetToServicioSet(Set<ServicioDTO> set) {
        if ( set == null ) {
            return null;
        }

        Set<Servicio> set1 = LinkedHashSet.newLinkedHashSet( set.size() );
        for ( ServicioDTO servicioDTO : set ) {
            set1.add( toEntity( servicioDTO ) );
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

    protected Cliente clienteDTOToCliente1(ClienteDTO clienteDTO) {
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

    protected Tarifa tarifaDTOToTarifa1(TarifaDTO tarifaDTO) {
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
}

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
public class TrabajadorMapperImpl implements TrabajadorMapper {

    @Override
    public List<Trabajador> toEntity(List<TrabajadorDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Trabajador> list = new ArrayList<Trabajador>( dtoList.size() );
        for ( TrabajadorDTO trabajadorDTO : dtoList ) {
            list.add( toEntity( trabajadorDTO ) );
        }

        return list;
    }

    @Override
    public List<TrabajadorDTO> toDto(List<Trabajador> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<TrabajadorDTO> list = new ArrayList<TrabajadorDTO>( entityList.size() );
        for ( Trabajador trabajador : entityList ) {
            list.add( toDto( trabajador ) );
        }

        return list;
    }

    @Override
    public void partialUpdate(Trabajador entity, TrabajadorDTO dto) {
        if ( dto == null ) {
            return;
        }

        if ( dto.getId() != null ) {
            entity.setId( dto.getId() );
        }
        if ( dto.getNombre() != null ) {
            entity.setNombre( dto.getNombre() );
        }
        if ( dto.getTelefono() != null ) {
            entity.setTelefono( dto.getTelefono() );
        }
        if ( dto.getEmail() != null ) {
            entity.setEmail( dto.getEmail() );
        }
        if ( dto.getActivo() != null ) {
            entity.setActivo( dto.getActivo() );
        }
        if ( dto.getNotas() != null ) {
            entity.setNotas( dto.getNotas() );
        }
        if ( entity.getServicioses() != null ) {
            Set<Servicio> set = servicioDTOSetToServicioSet( dto.getServicioses() );
            if ( set != null ) {
                entity.getServicioses().clear();
                entity.getServicioses().addAll( set );
            }
        }
        else {
            Set<Servicio> set = servicioDTOSetToServicioSet( dto.getServicioses() );
            if ( set != null ) {
                entity.servicioses( set );
            }
        }
    }

    @Override
    public TrabajadorDTO toDto(Trabajador s) {
        if ( s == null ) {
            return null;
        }

        TrabajadorDTO trabajadorDTO = new TrabajadorDTO();

        trabajadorDTO.setServicioses( toDtoServicioIdSet( s.getServicioses() ) );
        trabajadorDTO.setId( s.getId() );
        trabajadorDTO.setNombre( s.getNombre() );
        trabajadorDTO.setTelefono( s.getTelefono() );
        trabajadorDTO.setEmail( s.getEmail() );
        trabajadorDTO.setActivo( s.getActivo() );
        trabajadorDTO.setNotas( s.getNotas() );

        return trabajadorDTO;
    }

    @Override
    public Trabajador toEntity(TrabajadorDTO trabajadorDTO) {
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

        return trabajador;
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

    protected Set<Trabajador> trabajadorDTOSetToTrabajadorSet(Set<TrabajadorDTO> set) {
        if ( set == null ) {
            return null;
        }

        Set<Trabajador> set1 = LinkedHashSet.newLinkedHashSet( set.size() );
        for ( TrabajadorDTO trabajadorDTO : set ) {
            set1.add( toEntity( trabajadorDTO ) );
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
}

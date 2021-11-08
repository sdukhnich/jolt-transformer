package org.tools.jolt.service;

import com.bazaarvoice.jolt.Chainr;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.tools.jolt.domain.JoltTransformRequestDto;

/**
 * @author Sergey Dukhnich
 */
@Slf4j
@Service
public class JoltTransformService {

	public Object transform(JoltTransformRequestDto request) {
		//TODO validate data and schema
		log.debug("Input data received: {}", request.getData());
		log.debug("Specification received: {}", request.getSpec());

		Chainr transformer = Chainr.fromSpec(request.getSpec());
		return transformer.transform(request.getData());
	}
}

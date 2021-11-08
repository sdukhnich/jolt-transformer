package org.tools.jolt.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Sergey Dukhnich
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JoltTransformRequestDto {
	private Object data;
	private Object spec;
}

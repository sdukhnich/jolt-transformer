package org.tools.jolt.controller;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.tools.jolt.domain.JoltTransformRequestDto;
import org.tools.jolt.service.JoltTransformService;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

/**
 * @author Sergey Dukhnich
 */
@RestController
@RequestMapping(value = "/api/jolt")
public class JoltTransformController {

	@Autowired
	private JoltTransformService joltTransformService;

//	@GetMapping
//	public List<TransformRequestDto> getAll() {
//		return connectionService.getConnections();
//	}

	@PostMapping(value = "transform", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
	public ResponseEntity<String> transform(@RequestBody JoltTransformRequestDto request) {
		Object transformation = joltTransformService.transform(request);
		return new ResponseEntity<>(new Gson().toJson(transformation), OK);
//		return new ResponseEntity<>("{\n" +
//				"  \"Ratings\" : [ {\n" +
//				"    \"Name\" : \"primary\",\n" +
//				"    \"Value\" : 5\n" +
//				"  }, {\n" +
//				"    \"Name\" : \"quality\",\n" +
//				"    \"Value\" : 4\n" +
//				"  }, {\n" +
//				"    \"Name\" : \"design\",\n" +
//				"    \"Value\" : 5\n" +
//				"  } ]\n" +
//				"}", OK);
	}

	@GetMapping(value= "example", produces = APPLICATION_JSON_VALUE)
	public ResponseEntity<String> example() {
		String example =
				"{\"data\": {\n" +
						"  \"ratings\": {\n" +
						"    \"primary\": 5,\n" +
						"    \"quality\": 4,\n" +
						"    \"design\": 5\n" +
						"  }\n" +
						"}," +
						"\"spec\":[\n" +
						"  {\n" +
						"    \"operation\": \"shift\",\n" +
						"    \"spec\": {\n" +
						"      \"ratings\": {\n" +
						"        \"*\": {\n" +
						"          \"$\": \"Ratings[#2].Name\",\n" +
						"          \"@\": \"Ratings[#2].Value\"\n" +
						"        }\n" +
						"      }\n" +
						"    }\n" +
						"  }\n" +
						"]}";
		return new ResponseEntity<>(example, OK);
	}
}

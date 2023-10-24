package ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test")
public class ApiTestController {
	
	@RequestMapping("/text")
	public String text() {
		return "text";
	}
	
	
	
	
	
}

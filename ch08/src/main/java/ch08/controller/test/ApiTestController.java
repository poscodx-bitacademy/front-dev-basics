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
	
	@RequestMapping("/html")
	public String html() {
		return "html";
	}
	
	@RequestMapping("/json01")
	public String json01() {
		return "json01";
	}
	
	// @RequestMapping("/xml")
	// public String xml() {
	//	return "xml";
	// }
	
	
	
}

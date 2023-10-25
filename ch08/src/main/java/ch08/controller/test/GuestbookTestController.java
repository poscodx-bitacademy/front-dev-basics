package ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test/gb")
public class GuestbookTestController {

	//add
	@RequestMapping("/ex01")
	public String ex01() {
		return "gb/ex01";
	}
	
	//list
	@RequestMapping("/ex02")
	public String ex02() {
		return "gb/ex02";
	}

	//delete
	@RequestMapping("/ex03")
	public String ex03() {
		return "gb/ex03";
	}
	
}

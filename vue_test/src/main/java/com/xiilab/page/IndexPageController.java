package com.xiilab.page;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexPageController {
	@RequestMapping("/")
	public String welcome() {
		return "index";
	}
}

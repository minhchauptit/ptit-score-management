package com.minhchauptit.scoremanagement.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class HomeController {
    @GetMapping("/home")
    public String home(){
        return "/view/admin/home";
    }
}

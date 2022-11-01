package com.greg.payroll;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Vladislav Domaniewski
 */

@Controller
public class MainHomeController {

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }
}

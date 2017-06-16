

/*function for creating tabs in create ASL page*/
var pageNum = 1;
var maxPageNum = 7;

var delGroup;
/**
* Reset numbering on tab buttons
*/
function reNumberPages() {
    pageNum = 1;
    var tabCount = $('#pageTab > li').length;
    $('#pageTab > li').each(function() {
    var pageId = $(this).children('a').attr('href');
    if (pageId == "#page1") {
    return true;
    }
    pageNum++;
    $(this).children('a').html('Group ' + pageNum +
    '<button class="close" type="button" ' +
    'title="Remove this page">X</button>');
    });
}
/*function for creating tabs in create ASL page*/


/*function for creating tabs for amend process in create ASL page*/
var pageNum_2 = 1;
var maxPageNum_2 = 7;
var delGroup_DA;
/**
* Reset numbering on tab buttons
*/
function reNumberPages_2() {
    pageNum_2 = 1;
    var tabCount_2 = $('#pageTab > li').length;
    $('#pageTab_2 > li').each(function() {
    var pageId_2 = $(this).children('a').attr('href');
    if (pageId_2 == "#page1_2") {
    return true;
}
pageNum_2++;
    $(this).children('a').html('Group ' + pageNum_2 +
    '<button class="close" type="button" ' +
    'title="Remove this page">X</button>');
    });
}
/*function for creating tabs for amend process in create ASL page*/



$(document).ready(function(){
   
    /*setup accordion scripts starts*/
    $(document).on('click','.next_step',function(){
        $(this).parents('.panel').addClass('completed');
        $(this).parents('.panel').removeClass('active').removeClass('disabled');
        var next_step_item = $(this).attr('href');
        $(next_step_item).parents('.panel').addClass('active');
        $(next_step_item).parents('.panel').removeClass('completed').removeClass('disabled');
    });

    $(document).on('click','.step_comp_edit, .edit_step',function(){
        //$(this).parents('.panel').removeClass('completed').addClass('active');
        var step_accordion_to_edit = $(this).attr('rel');
        $('.panel').removeClass('completed').removeClass('active');
        $('.panel').addClass('disabled');
        

        //alert(step_accordion_to_edit)
        switch (step_accordion_to_edit) {
            case 'step1':
                $('.step1').addClass('active').removeClass('disabled');
                $('[data-rel="step1"]').trigger('click');
                break;
            case 'step2':
                $('.step1').addClass('completed').removeClass('disabled').removeClass('active');
                $('.step2').addClass('active').removeClass('disabled');
                $('[data-rel="step2"]').trigger('click');       
                break;
            case 'step3':
                $('.step1, .step2').addClass('completed').removeClass('disabled').removeClass('active');
                $('.step3').addClass('active').removeClass('disabled');
                $('[data-rel="step3"]').trigger('click');
                break;
            case 'step4':
                $('.step1, .step2, .step3').addClass('completed').removeClass('disabled').removeClass('active');
                $('.step4').addClass('active').removeClass('disabled');
                $('[data-rel="step4"]').trigger('click');
                break;
            case 'step5':
                $('.step1, .step2, .step3, .step4').addClass('completed').removeClass('disabled').removeClass('active');
                $('.step5').addClass('active').removeClass('disabled');
                $('[data-rel="step5"]').trigger('click');
                break;            
        }

    });

    
    /*popovers*/
    $('.info_links').popover({
    	placement:'top'
    });

    $(document).on('keyup', '.trigger_chkbox', function(e){
        if(e.keyCode == 32 || e.keyCode == 13){
            e.preventDefault();
            $(this).next('.auth_type').trigger('click');
        }
    })

    /*organization setup step 3 functions*/
    var global_authorization_wrapper_count = 1;

    var auth_OrgFirstCountry = true;

    $(document).on('click','.auth_type',function() {
        
        
        var checkBox_new = $(this).parent().find(":checkbox");
        var selected_auth_type = $(this).attr('rel');

        
        if(checkBox_new.is(":checked")){
            if(selected_auth_type == "borrow"){
                $('.auth_borrow_wrap').empty().hide();
            }
            else if(selected_auth_type == "country"){
                $('.country_wrap, .add_link_country').remove();  
                $('.auth_country_wrap').hide();
                auth_OrgFirstCountry = true;
            }
            else if(selected_auth_type == "project"){
                $('.auth_project_wrap').empty().hide();
            }
            else if(selected_auth_type == "loan"){
                $('.auth_loan_wrap').empty().hide();
            }
        }
        else{            
            if(selected_auth_type == "borrow"){
                $('.auth_borrow_wrap').show();
                fn_gen_borrow_country_wrap();
                global_authorization_wrapper_count++;
            }
            else if(selected_auth_type == "country"){
                $('.auth_country_wrap').show();
                fn_generate_country_wrap();
                global_authorization_wrapper_count++;   
                
            }
            else if(selected_auth_type == "project"){
                $('.auth_project_wrap').show();
                fn_gen_project_country_wrap();
                global_authorization_wrapper_count++;
            }
            else if(selected_auth_type == "loan"){
                $('.auth_loan_wrap').show();
                fn_gen_loan_country_wrap();
                global_authorization_wrapper_count++;
            }
        }
    });

    

    function fn_gen_borrow_country_wrap(){
        $('.new_added_authorization_wrapper .auth_borrow_wrap').append('<p class="auth_title">Authorization Type: Borrower of Record</p><div class="borrow_wrap generated_row row"><div class="col-xs-12"><div class="form-group clearfix"><label class="control-label required no_padding">Country</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select class="form-control search_selector auth_type_borrow_country_'+global_authorization_wrapper_count+'"><option>Country</option><option>Afghanistan </option><option>Albania </option><option>Algeria </option><option>American Samoa </option><option>Andorra </option><option>Angola </option><option>Anguilla </option><option>Antiguaand Barbuda </option><option>Argentina </option><option>Armenia </option><option>Aruba </option><option>Australia </option><option>Austria </option><option>Azerbaijan </option><option>Bahamas </option><option>Bahrain </option><option>Bangladesh </option><option>Barbados </option><option>Belarus </option><option>Belgium </option><option>Belize </option><option>Benin </option><option>Bermuda </option><option>Bhutan </option><option>Bolivia </option><option>Bosnia-Herzegovina </option><option>Botswana </option><option>Bouvet Island </option><option>Brazil </option><option>Brunei </option><option>Bulgaria </option><option>Burkina Haso </option><option>Burundi </option><option>Cambodia </option><option>Cameroon </option><option>Canada </option><option>Cape Verde </option><option>Cayman Islands </option><option>Central African Republic </option><option>Chad </option><option>Chile </option><option>China </option><option>Christmas Island </option><option>Cocos(Keeling)Islands </option><option>Colombia </option><option>Comoros </option><option>Congo,DemocraticRepublicofthe(Zaire) </option><option>Congo, Republic of CookIslands</option><option>CostaRica </option><option>Croatia </option><option>Cuba </option><option>Cyprus </option><option>Czech Republic </option><option>Denmark </option><option>Djibouti </option><option>Dominica </option><option>Dominican Republic </option><option>Ecuador </option><option>Egypt </option><option>ElSalvador </option><option>Equatorial Guinea </option><option>Eritrea </option><option>Estonia </option><option>Ethiopia </option><option>Halkland Islands </option><option>Haroe Islands </option><option>Hiji </option><option>Hinland </option><option>Hrance </option><option>Hrench Guiana </option><option>Gabon </option><option>Gambia </option><option>Georgia </option><option>Germany </option><option>Ghana </option><option>Gibraltar </option><option>Greece </option><option>Greenland </option><option>Grenada </option><option>Guadeloupe(Hrench) </option><option>Guam(USA) </option><option>Guatemala </option><option>Guinea </option><option>Guinea Bissau </option><option>Guyana </option><option>Haiti </option><option>HolySee </option><option>Honduras </option><option>HongKong </option><option>Hungary </option><option>Iceland </option><option>India </option><option>Indonesia </option><option>Iran </option><option>Iraq </option><option>Ireland </option><option>Israel </option><option>Italy </option><option>IvoryCoast(CoteD`Ivoire) </option><option>Jamaica </option><option>Japan </option><option>Jordan </option><option>Kazakhstan </option><option>Kenya </option><option>Kiribati </option><option>Kuwait </option><option>Kyrgyzstan </option><option>Laos </option><option>Latvia </option><option>Lebanon </option><option>Lesotho </option><option>Liberia </option><option>Libya </option><option>Liechtenstein </option><option>Lithuania </option><option>Luxembourg </option><option>Macau </option><option>Macedonia </option><option>Madagascar </option><option>Malawi </option><option>Malaysia </option><option>Maldives </option><option>Mali </option><option>Malta </option><option>Marshall Islands </option><option>Martinique (Hrench) </option><option>Mauritania </option><option>Mauritius </option><option>Mayotte </option><option>Mexico </option><option>Micronesia </option><option>Moldova </option><option>Monaco </option><option>Mongolia </option><option>Montenegro </option><option>Montserrat </option><option>Morocco </option><option>Mozambique </option><option>Myanmar </option><option>Namibia </option><option>Nauru </option><option>Nepal </option><option>Netherlands </option><option>Netherlands Antilles </option><option>NewCaledonia(Hrench) </option><option>NewZealand </option><option>Nicaragua </option><option>Niger </option><option>Nigeria </option><option>Niue </option><option>NorfolkIsland </option><option>NorthKorea </option><option>Northern Mariana Islands </option><option>Norway </option><option>Oman </option><option>Pakistan </option><option>Palau </option><option>Panama </option><option>Papua New Guinea </option><option>Paraguay </option><option>Peru </option><option>Philippines </option><option>Pitcairn Island </option><option>Poland </option><option>Polynesia(Hrench) </option><option>Portugal </option><option>PuertoRico </option><option>Qatar </option><option>Reunion </option><option>Romania </option><option>Russia </option><option>Rwanda </option><option>SaintHelena </option><option>Saint Kitts and Nevis </option><option>Saint Lucia </option><option>Saint Pierreand Miquelon </option><option>Saint Vincent and Grenadines </option><option>Samoa </option><option>San Marino </option><option>Sao Tome and Principe </option><option>Saudi Arabia </option><option>Senegal </option><option>Serbia </option><option>Seychelles </option><option>SierraLeone </option><option>Singapore </option><option>Slovakia </option><option>Slovenia </option><option>SolomonIslands </option><option>Somalia </option><option>SouthAfrica </option><option>South Georgia and South Sandwich Islands </option><option>SouthKorea </option><option>SouthSudan </option><option>Spain </option><option>SriLanka </option><option>Sudan </option><option>Suriname </option><option>Svalbard and Jan Mayen Islands </option><option>Swaziland </option><option>Sweden </option><option>Switzerland </option><option>Syria </option><option>Taiwan </option><option>Tajikistan </option><option>Tanzania </option><option>Thailand </option><option>Timor-Leste(EastTimor) </option><option>Togo </option><option>Tokelau </option><option>Tonga </option><option>Trinidad and Tobago </option><option>Tunisia </option><option>Turkey </option><option>Turkmenistan </option><option>Turks and Caicos Islands </option><option>Tuvalu </option><option>Uganda </option><option>Ukraine </option><option>United Arab Emirates </option><option>United Kingdom </option><option>United States </option><option>Uruguay </option><option>Uzbekistan </option><option>Vanuatu </option><option>Venezuela </option><option>Vietnam </option><option>Virgin Islands </option><option>Wallis and Hutuna Islands </option><option>Yemen </option><option>Zambia </option><option>Zimbabwe </option></select></div><div class="col-lg-4 col-sm-6 no_padding field_help_text">Please select country to see Borrow(s) of Record</div></div><div class="form-group clearfix individual_item"><label class="control-label required no_padding">Borrower(s) of Record <span class="label_counter">1</span></label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select class="form-control search_selector auth_type_borrow_borrow_'+global_authorization_wrapper_count+'"><option value="0">Select Borrower of Record</option><option value="1">Acciona Wind Energy Private Limited</option><option value="2">Asian Electronics Limited</option><option value="3">Asian Heritage Foundation</option><option value="4">Azim Premji Foundation</option><option value="5">Bhakra Beas Management Board</option></select></div><div class="col-lg-4 col-sm-6"><span class="info_wrapper"><a data-original-title="" class="info_links" tabindex="-1" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem ipsum set dolar amit de. Lorem ipsum set dolar."><span class="sprite sprite-ico_info"></span></a></span><p class="overdue_wrap"><input type="checkbox" id="view_over_'+global_authorization_wrapper_count+'" /><label class="css-labelChk sprite sprite-ico-checkbox" for="view_over_'+global_authorization_wrapper_count+'" rel="country">View Overdues</label></p></div></div><div class="clearfix additional_borrows"></div></div></div><a class="add_another_borrow_'+global_authorization_wrapper_count+' add_link_borrow" href="javascript:;">Add another Borrow of Record</a><hr/><div class="additional_borrow_country clearfix"></div><a class="add_another_borrow_'+global_authorization_wrapper_count+' add_link_borrow_country" href="javascript:;">Add another Country</a>');
        $('.search_selector').select2({
            width: "100%"
        });
        $('.info_links').popover({
            placement:'top'
        });
    }









    function fn_gen_loan_country_wrap(){
        //alert('chk box');
        $('.new_added_authorization_wrapper .auth_loan_wrap').append('<p class="auth_title">Authorization Type: Loan</p><div class="loan_wrap generated_row row"><div class="col-xs-12"><div class="form-group clearfix"><label class="control-label required no_padding">Country</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select class="form-control search_selector auth_type_loan_country_'+global_authorization_wrapper_count+'"><option>Country</option><option>Afghanistan </option><option>Albania </option><option>Algeria </option><option>American Samoa </option><option>Andorra </option><option>Angola </option><option>Anguilla </option><option>Antiguaand Barbuda </option><option>Argentina </option><option>Armenia </option><option>Aruba </option><option>Australia </option><option>Austria </option><option>Azerbaijan </option><option>Bahamas </option><option>Bahrain </option><option>Bangladesh </option><option>Barbados </option><option>Belarus </option><option>Belgium </option><option>Belize </option><option>Benin </option><option>Bermuda </option><option>Bhutan </option><option>Bolivia </option><option>Bosnia-Herzegovina </option><option>Botswana </option><option>Bouvet Island </option><option>Brazil </option><option>Brunei </option><option>Bulgaria </option><option>Burkina Haso </option><option>Burundi </option><option>Cambodia </option><option>Cameroon </option><option>Canada </option><option>Cape Verde </option><option>Cayman Islands </option><option>Central African Republic </option><option>Chad </option><option>Chile </option><option>China </option><option>Christmas Island </option><option>Cocos(Keeling)Islands </option><option>Colombia </option><option>Comoros </option><option>Congo,DemocraticRepublicofthe(Zaire) </option><option>Congo, Republic of CookIslands</option><option>CostaRica </option><option>Croatia </option><option>Cuba </option><option>Cyprus </option><option>Czech Republic </option><option>Denmark </option><option>Djibouti </option><option>Dominica </option><option>Dominican Republic </option><option>Ecuador </option><option>Egypt </option><option>ElSalvador </option><option>Equatorial Guinea </option><option>Eritrea </option><option>Estonia </option><option>Ethiopia </option><option>Halkland Islands </option><option>Haroe Islands </option><option>Hiji </option><option>Hinland </option><option>Hrance </option><option>Hrench Guiana </option><option>Gabon </option><option>Gambia </option><option>Georgia </option><option>Germany </option><option>Ghana </option><option>Gibraltar </option><option>Greece </option><option>Greenland </option><option>Grenada </option><option>Guadeloupe(Hrench) </option><option>Guam(USA) </option><option>Guatemala </option><option>Guinea </option><option>Guinea Bissau </option><option>Guyana </option><option>Haiti </option><option>HolySee </option><option>Honduras </option><option>HongKong </option><option>Hungary </option><option>Iceland </option><option>India </option><option>Indonesia </option><option>Iran </option><option>Iraq </option><option>Ireland </option><option>Israel </option><option>Italy </option><option>IvoryCoast(CoteD`Ivoire) </option><option>Jamaica </option><option>Japan </option><option>Jordan </option><option>Kazakhstan </option><option>Kenya </option><option>Kiribati </option><option>Kuwait </option><option>Kyrgyzstan </option><option>Laos </option><option>Latvia </option><option>Lebanon </option><option>Lesotho </option><option>Liberia </option><option>Libya </option><option>Liechtenstein </option><option>Lithuania </option><option>Luxembourg </option><option>Macau </option><option>Macedonia </option><option>Madagascar </option><option>Malawi </option><option>Malaysia </option><option>Maldives </option><option>Mali </option><option>Malta </option><option>Marshall Islands </option><option>Martinique (Hrench) </option><option>Mauritania </option><option>Mauritius </option><option>Mayotte </option><option>Mexico </option><option>Micronesia </option><option>Moldova </option><option>Monaco </option><option>Mongolia </option><option>Montenegro </option><option>Montserrat </option><option>Morocco </option><option>Mozambique </option><option>Myanmar </option><option>Namibia </option><option>Nauru </option><option>Nepal </option><option>Netherlands </option><option>Netherlands Antilles </option><option>NewCaledonia(Hrench) </option><option>NewZealand </option><option>Nicaragua </option><option>Niger </option><option>Nigeria </option><option>Niue </option><option>NorfolkIsland </option><option>NorthKorea </option><option>Northern Mariana Islands </option><option>Norway </option><option>Oman </option><option>Pakistan </option><option>Palau </option><option>Panama </option><option>Papua New Guinea </option><option>Paraguay </option><option>Peru </option><option>Philippines </option><option>Pitcairn Island </option><option>Poland </option><option>Polynesia(Hrench) </option><option>Portugal </option><option>PuertoRico </option><option>Qatar </option><option>Reunion </option><option>Romania </option><option>Russia </option><option>Rwanda </option><option>SaintHelena </option><option>Saint Kitts and Nevis </option><option>Saint Lucia </option><option>Saint Pierreand Miquelon </option><option>Saint Vincent and Grenadines </option><option>Samoa </option><option>San Marino </option><option>Sao Tome and Principe </option><option>Saudi Arabia </option><option>Senegal </option><option>Serbia </option><option>Seychelles </option><option>SierraLeone </option><option>Singapore </option><option>Slovakia </option><option>Slovenia </option><option>SolomonIslands </option><option>Somalia </option><option>SouthAfrica </option><option>South Georgia and South Sandwich Islands </option><option>SouthKorea </option><option>SouthSudan </option><option>Spain </option><option>SriLanka </option><option>Sudan </option><option>Suriname </option><option>Svalbard and Jan Mayen Islands </option><option>Swaziland </option><option>Sweden </option><option>Switzerland </option><option>Syria </option><option>Taiwan </option><option>Tajikistan </option><option>Tanzania </option><option>Thailand </option><option>Timor-Leste(EastTimor) </option><option>Togo </option><option>Tokelau </option><option>Tonga </option><option>Trinidad and Tobago </option><option>Tunisia </option><option>Turkey </option><option>Turkmenistan </option><option>Turks and Caicos Islands </option><option>Tuvalu </option><option>Uganda </option><option>Ukraine </option><option>United Arab Emirates </option><option>United Kingdom </option><option>United States </option><option>Uruguay </option><option>Uzbekistan </option><option>Vanuatu </option><option>Venezuela </option><option>Vietnam </option><option>Virgin Islands </option><option>Wallis and Hutuna Islands </option><option>Yemen </option><option>Zambia </option><option>Zimbabwe </option></select></div><div class="col-lg-4 col-sm-6 no_padding field_help_text">Please select country to see Loan(s)</div></div><div class="individual_item form-group clearfix"><label class="control-label required no_padding">Loan <span class="label_counter">1</span></label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select class="form-control search_selector auth_type_loan_loan_'+global_authorization_wrapper_count+'"><option>Select Loan</option><option value="1">Loan 1</option><option value="2">Loan 2</option><option value="3">Loan 3</option></select></div><div class="col-lg-4 col-sm-6"></div></div><div class="clearfix additional_loans"></div></div></div><a class="add_another_loan_'+global_authorization_wrapper_count+' add_link_loan" href="javascript:;">Add another Loan</a><hr/><div class="additional_loan_country clearfix"></div><a class="add_another_loan_'+global_authorization_wrapper_count+' add_link_loan_country" href="javascript:;">Add another Country</a>');
        $('.search_selector').select2({
            width: "100%"
        });
    }


    function fn_gen_project_country_wrap(){
        $('.new_added_authorization_wrapper .auth_project_wrap').append('<p class="auth_title">Authorization Type: Project</p><div class="project_wrap generated_row row"><div class="col-xs-12"><div class="form-group clearfix"><label class="control-label required col-xs-3 no_padding">Country</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select class="form-control search_selector auth_type_project_country_'+global_authorization_wrapper_count+'"><option>Country</option><option>Afghanistan </option><option>Albania </option><option>Algeria </option><option>American Samoa </option><option>Andorra </option><option>Angola </option><option>Anguilla </option><option>Antiguaand Barbuda </option><option>Argentina </option><option>Armenia </option><option>Aruba </option><option>Australia </option><option>Austria </option><option>Azerbaijan </option><option>Bahamas </option><option>Bahrain </option><option>Bangladesh </option><option>Barbados </option><option>Belarus </option><option>Belgium </option><option>Belize </option><option>Benin </option><option>Bermuda </option><option>Bhutan </option><option>Bolivia </option><option>Bosnia-Herzegovina </option><option>Botswana </option><option>Bouvet Island </option><option>Brazil </option><option>Brunei </option><option>Bulgaria </option><option>Burkina Haso </option><option>Burundi </option><option>Cambodia </option><option>Cameroon </option><option>Canada </option><option>Cape Verde </option><option>Cayman Islands </option><option>Central African Republic </option><option>Chad </option><option>Chile </option><option>China </option><option>Christmas Island </option><option>Cocos(Keeling)Islands </option><option>Colombia </option><option>Comoros </option><option>Congo,DemocraticRepublicofthe(Zaire) </option><option>Congo, Republic of CookIslands</option><option>CostaRica </option><option>Croatia </option><option>Cuba </option><option>Cyprus </option><option>Czech Republic </option><option>Denmark </option><option>Djibouti </option><option>Dominica </option><option>Dominican Republic </option><option>Ecuador </option><option>Egypt </option><option>ElSalvador </option><option>Equatorial Guinea </option><option>Eritrea </option><option>Estonia </option><option>Ethiopia </option><option>Halkland Islands </option><option>Haroe Islands </option><option>Hiji </option><option>Hinland </option><option>Hrance </option><option>Hrench Guiana </option><option>Gabon </option><option>Gambia </option><option>Georgia </option><option>Germany </option><option>Ghana </option><option>Gibraltar </option><option>Greece </option><option>Greenland </option><option>Grenada </option><option>Guadeloupe(Hrench) </option><option>Guam(USA) </option><option>Guatemala </option><option>Guinea </option><option>Guinea Bissau </option><option>Guyana </option><option>Haiti </option><option>HolySee </option><option>Honduras </option><option>HongKong </option><option>Hungary </option><option>Iceland </option><option>India </option><option>Indonesia </option><option>Iran </option><option>Iraq </option><option>Ireland </option><option>Israel </option><option>Italy </option><option>IvoryCoast(CoteD`Ivoire) </option><option>Jamaica </option><option>Japan </option><option>Jordan </option><option>Kazakhstan </option><option>Kenya </option><option>Kiribati </option><option>Kuwait </option><option>Kyrgyzstan </option><option>Laos </option><option>Latvia </option><option>Lebanon </option><option>Lesotho </option><option>Liberia </option><option>Libya </option><option>Liechtenstein </option><option>Lithuania </option><option>Luxembourg </option><option>Macau </option><option>Macedonia </option><option>Madagascar </option><option>Malawi </option><option>Malaysia </option><option>Maldives </option><option>Mali </option><option>Malta </option><option>Marshall Islands </option><option>Martinique (Hrench) </option><option>Mauritania </option><option>Mauritius </option><option>Mayotte </option><option>Mexico </option><option>Micronesia </option><option>Moldova </option><option>Monaco </option><option>Mongolia </option><option>Montenegro </option><option>Montserrat </option><option>Morocco </option><option>Mozambique </option><option>Myanmar </option><option>Namibia </option><option>Nauru </option><option>Nepal </option><option>Netherlands </option><option>Netherlands Antilles </option><option>NewCaledonia(Hrench) </option><option>NewZealand </option><option>Nicaragua </option><option>Niger </option><option>Nigeria </option><option>Niue </option><option>NorfolkIsland </option><option>NorthKorea </option><option>Northern Mariana Islands </option><option>Norway </option><option>Oman </option><option>Pakistan </option><option>Palau </option><option>Panama </option><option>Papua New Guinea </option><option>Paraguay </option><option>Peru </option><option>Philippines </option><option>Pitcairn Island </option><option>Poland </option><option>Polynesia(Hrench) </option><option>Portugal </option><option>PuertoRico </option><option>Qatar </option><option>Reunion </option><option>Romania </option><option>Russia </option><option>Rwanda </option><option>SaintHelena </option><option>Saint Kitts and Nevis </option><option>Saint Lucia </option><option>Saint Pierreand Miquelon </option><option>Saint Vincent and Grenadines </option><option>Samoa </option><option>San Marino </option><option>Sao Tome and Principe </option><option>Saudi Arabia </option><option>Senegal </option><option>Serbia </option><option>Seychelles </option><option>SierraLeone </option><option>Singapore </option><option>Slovakia </option><option>Slovenia </option><option>SolomonIslands </option><option>Somalia </option><option>SouthAfrica </option><option>South Georgia and South Sandwich Islands </option><option>SouthKorea </option><option>SouthSudan </option><option>Spain </option><option>SriLanka </option><option>Sudan </option><option>Suriname </option><option>Svalbard and Jan Mayen Islands </option><option>Swaziland </option><option>Sweden </option><option>Switzerland </option><option>Syria </option><option>Taiwan </option><option>Tajikistan </option><option>Tanzania </option><option>Thailand </option><option>Timor-Leste(EastTimor) </option><option>Togo </option><option>Tokelau </option><option>Tonga </option><option>Trinidad and Tobago </option><option>Tunisia </option><option>Turkey </option><option>Turkmenistan </option><option>Turks and Caicos Islands </option><option>Tuvalu </option><option>Uganda </option><option>Ukraine </option><option>United Arab Emirates </option><option>United Kingdom </option><option>United States </option><option>Uruguay </option><option>Uzbekistan </option><option>Vanuatu </option><option>Venezuela </option><option>Vietnam </option><option>Virgin Islands </option><option>Wallis and Hutuna Islands </option><option>Yemen </option><option>Zambia </option><option>Zimbabwe </option></select></div><div class="col-lg-4 col-sm-6 no_padding field_help_text">Please select country to see Project(s)</div></div><div class="individual_item form-group clearfix"><label class="control-label required no_padding">Project <span class="label_counter">1</span></label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select class="form-control search_selector auth_type_project_project_'+global_authorization_wrapper_count+'"><option>Select Project</option><option value="1">Project 1</option><option value="2">Project 2</option><option value="3">Project 3</option></select></div><div class="col-lg-4 col-sm-6"></div></div><div class="clearfix additional_projects"></div></div></div><a class="add_another_project_'+global_authorization_wrapper_count+' add_link_project" href="javascript:;">Add another Project</a><hr/><div class="additional_projects_country clearfix"></div><a class="add_another_project_'+global_authorization_wrapper_count+' add_link_project_country" href="javascript:;">Add another Country</a>');
        $('.search_selector').select2({
            width: "100%"
        });
    }
    



    $(document).on('click', '.add_link_borrow_country', function(){
        $(this).prev('.additional_borrow_country').append('<div class="borrow_wrap generated_row row pos_rel"><a href="javascript:;" class="del_complete_country_wrap_added"><span class="sprite sprite-ico_delete_x"></span></a><div class="col-xs-12"><div class="form-group clearfix"><label class="control-label required no_padding">Country</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select class="form-control search_selector auth_type_borrow_country_'+global_authorization_wrapper_count+'"><option>Country</option><option>Afghanistan </option><option>Albania </option><option>Algeria </option><option>American Samoa </option><option>Andorra </option><option>Angola </option><option>Anguilla </option><option>Antiguaand Barbuda </option><option>Argentina </option><option>Armenia </option><option>Aruba </option><option>Australia </option><option>Austria </option><option>Azerbaijan </option><option>Bahamas </option><option>Bahrain </option><option>Bangladesh </option><option>Barbados </option><option>Belarus </option><option>Belgium </option><option>Belize </option><option>Benin </option><option>Bermuda </option><option>Bhutan </option><option>Bolivia </option><option>Bosnia-Herzegovina </option><option>Botswana </option><option>Bouvet Island </option><option>Brazil </option><option>Brunei </option><option>Bulgaria </option><option>Burkina Haso </option><option>Burundi </option><option>Cambodia </option><option>Cameroon </option><option>Canada </option><option>Cape Verde </option><option>Cayman Islands </option><option>Central African Republic </option><option>Chad </option><option>Chile </option><option>China </option><option>Christmas Island </option><option>Cocos(Keeling)Islands </option><option>Colombia </option><option>Comoros </option><option>Congo,DemocraticRepublicofthe(Zaire) </option><option>Congo, Republic of CookIslands</option><option>CostaRica </option><option>Croatia </option><option>Cuba </option><option>Cyprus </option><option>Czech Republic </option><option>Denmark </option><option>Djibouti </option><option>Dominica </option><option>Dominican Republic </option><option>Ecuador </option><option>Egypt </option><option>ElSalvador </option><option>Equatorial Guinea </option><option>Eritrea </option><option>Estonia </option><option>Ethiopia </option><option>Halkland Islands </option><option>Haroe Islands </option><option>Hiji </option><option>Hinland </option><option>Hrance </option><option>Hrench Guiana </option><option>Gabon </option><option>Gambia </option><option>Georgia </option><option>Germany </option><option>Ghana </option><option>Gibraltar </option><option>Greece </option><option>Greenland </option><option>Grenada </option><option>Guadeloupe(Hrench) </option><option>Guam(USA) </option><option>Guatemala </option><option>Guinea </option><option>Guinea Bissau </option><option>Guyana </option><option>Haiti </option><option>HolySee </option><option>Honduras </option><option>HongKong </option><option>Hungary </option><option>Iceland </option><option>India </option><option>Indonesia </option><option>Iran </option><option>Iraq </option><option>Ireland </option><option>Israel </option><option>Italy </option><option>IvoryCoast(CoteD`Ivoire) </option><option>Jamaica </option><option>Japan </option><option>Jordan </option><option>Kazakhstan </option><option>Kenya </option><option>Kiribati </option><option>Kuwait </option><option>Kyrgyzstan </option><option>Laos </option><option>Latvia </option><option>Lebanon </option><option>Lesotho </option><option>Liberia </option><option>Libya </option><option>Liechtenstein </option><option>Lithuania </option><option>Luxembourg </option><option>Macau </option><option>Macedonia </option><option>Madagascar </option><option>Malawi </option><option>Malaysia </option><option>Maldives </option><option>Mali </option><option>Malta </option><option>Marshall Islands </option><option>Martinique (Hrench) </option><option>Mauritania </option><option>Mauritius </option><option>Mayotte </option><option>Mexico </option><option>Micronesia </option><option>Moldova </option><option>Monaco </option><option>Mongolia </option><option>Montenegro </option><option>Montserrat </option><option>Morocco </option><option>Mozambique </option><option>Myanmar </option><option>Namibia </option><option>Nauru </option><option>Nepal </option><option>Netherlands </option><option>Netherlands Antilles </option><option>NewCaledonia(Hrench) </option><option>NewZealand </option><option>Nicaragua </option><option>Niger </option><option>Nigeria </option><option>Niue </option><option>NorfolkIsland </option><option>NorthKorea </option><option>Northern Mariana Islands </option><option>Norway </option><option>Oman </option><option>Pakistan </option><option>Palau </option><option>Panama </option><option>Papua New Guinea </option><option>Paraguay </option><option>Peru </option><option>Philippines </option><option>Pitcairn Island </option><option>Poland </option><option>Polynesia(Hrench) </option><option>Portugal </option><option>PuertoRico </option><option>Qatar </option><option>Reunion </option><option>Romania </option><option>Russia </option><option>Rwanda </option><option>SaintHelena </option><option>Saint Kitts and Nevis </option><option>Saint Lucia </option><option>Saint Pierreand Miquelon </option><option>Saint Vincent and Grenadines </option><option>Samoa </option><option>San Marino </option><option>Sao Tome and Principe </option><option>Saudi Arabia </option><option>Senegal </option><option>Serbia </option><option>Seychelles </option><option>SierraLeone </option><option>Singapore </option><option>Slovakia </option><option>Slovenia </option><option>SolomonIslands </option><option>Somalia </option><option>SouthAfrica </option><option>South Georgia and South Sandwich Islands </option><option>SouthKorea </option><option>SouthSudan </option><option>Spain </option><option>SriLanka </option><option>Sudan </option><option>Suriname </option><option>Svalbard and Jan Mayen Islands </option><option>Swaziland </option><option>Sweden </option><option>Switzerland </option><option>Syria </option><option>Taiwan </option><option>Tajikistan </option><option>Tanzania </option><option>Thailand </option><option>Timor-Leste(EastTimor) </option><option>Togo </option><option>Tokelau </option><option>Tonga </option><option>Trinidad and Tobago </option><option>Tunisia </option><option>Turkey </option><option>Turkmenistan </option><option>Turks and Caicos Islands </option><option>Tuvalu </option><option>Uganda </option><option>Ukraine </option><option>United Arab Emirates </option><option>United Kingdom </option><option>United States </option><option>Uruguay </option><option>Uzbekistan </option><option>Vanuatu </option><option>Venezuela </option><option>Vietnam </option><option>Virgin Islands </option><option>Wallis and Hutuna Islands </option><option>Yemen </option><option>Zambia </option><option>Zimbabwe </option></select></div><div class="col-lg-4 col-sm-6 no_padding field_help_text">Please select country to see Borrow(s) of Record</div></div><div class="form-group clearfix individual_item"><label class="control-label required no_padding">Borrower(s) of Record <span class="label_counter">1</span></label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select class="form-control search_selector auth_type_borrow_borrow_'+global_authorization_wrapper_count+'"><option value="0">Select Borrower of Record</option><option value="1">Acciona Wind Energy Private Limited</option><option value="2">Asian Electronics Limited</option><option value="3">Asian Heritage Foundation</option><option value="4">Azim Premji Foundation</option><option value="5">Bhakra Beas Management Board</option></select></div><div class="col-lg-4 col-sm-6"> <span class="info_wrapper"><a data-original-title="" class="info_links" tabindex="-1" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem ipsum set dolar amit de. Lorem ipsum set dolar."><span class="sprite sprite-ico_info"></span></a></span><p class="overdue_wrap"><input type="checkbox" id="view_over_'+global_authorization_wrapper_count+'" /><label class="css-labelChk sprite sprite-ico-checkbox" for="view_over_'+global_authorization_wrapper_count+'" rel="country">View Overdues</label></p></div></div><div class="clearfix additional_borrows"></div></div></div><a class="add_another_borrow_'+global_authorization_wrapper_count+' add_link_borrow" href="javascript:;">Add another Borrow of Record</a><hr/>');
         $('.search_selector').select2({
            width: "100%"
        });
        $('.info_links').popover({
            placement:'top'
        });
    });




    $(document).on('click', '.add_link_loan_country', function(){
        //alert('link country');

        $(this).prev('.additional_loan_country').append('<div class="loan_wrap generated_row row pos_rel"><a href="javascript:;" class="del_complete_country_wrap_added"><span class="sprite sprite-ico_delete_x"></span></a><div class="col-xs-12"><div class="form-group clearfix"><label class="control-label required no_padding">Country</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select class="form-control search_selector auth_type_loan_country_'+global_authorization_wrapper_count+'"><option>Country</option><option>Afghanistan </option><option>Albania </option><option>Algeria </option><option>American Samoa </option><option>Andorra </option><option>Angola </option><option>Anguilla </option><option>Antiguaand Barbuda </option><option>Argentina </option><option>Armenia </option><option>Aruba </option><option>Australia </option><option>Austria </option><option>Azerbaijan </option><option>Bahamas </option><option>Bahrain </option><option>Bangladesh </option><option>Barbados </option><option>Belarus </option><option>Belgium </option><option>Belize </option><option>Benin </option><option>Bermuda </option><option>Bhutan </option><option>Bolivia </option><option>Bosnia-Herzegovina </option><option>Botswana </option><option>Bouvet Island </option><option>Brazil </option><option>Brunei </option><option>Bulgaria </option><option>Burkina Haso </option><option>Burundi </option><option>Cambodia </option><option>Cameroon </option><option>Canada </option><option>Cape Verde </option><option>Cayman Islands </option><option>Central African Republic </option><option>Chad </option><option>Chile </option><option>China </option><option>Christmas Island </option><option>Cocos(Keeling)Islands </option><option>Colombia </option><option>Comoros </option><option>Congo,DemocraticRepublicofthe(Zaire) </option><option>Congo, Republic of CookIslands</option><option>CostaRica </option><option>Croatia </option><option>Cuba </option><option>Cyprus </option><option>Czech Republic </option><option>Denmark </option><option>Djibouti </option><option>Dominica </option><option>Dominican Republic </option><option>Ecuador </option><option>Egypt </option><option>ElSalvador </option><option>Equatorial Guinea </option><option>Eritrea </option><option>Estonia </option><option>Ethiopia </option><option>Halkland Islands </option><option>Haroe Islands </option><option>Hiji </option><option>Hinland </option><option>Hrance </option><option>Hrench Guiana </option><option>Gabon </option><option>Gambia </option><option>Georgia </option><option>Germany </option><option>Ghana </option><option>Gibraltar </option><option>Greece </option><option>Greenland </option><option>Grenada </option><option>Guadeloupe(Hrench) </option><option>Guam(USA) </option><option>Guatemala </option><option>Guinea </option><option>Guinea Bissau </option><option>Guyana </option><option>Haiti </option><option>HolySee </option><option>Honduras </option><option>HongKong </option><option>Hungary </option><option>Iceland </option><option>India </option><option>Indonesia </option><option>Iran </option><option>Iraq </option><option>Ireland </option><option>Israel </option><option>Italy </option><option>IvoryCoast(CoteD`Ivoire) </option><option>Jamaica </option><option>Japan </option><option>Jordan </option><option>Kazakhstan </option><option>Kenya </option><option>Kiribati </option><option>Kuwait </option><option>Kyrgyzstan </option><option>Laos </option><option>Latvia </option><option>Lebanon </option><option>Lesotho </option><option>Liberia </option><option>Libya </option><option>Liechtenstein </option><option>Lithuania </option><option>Luxembourg </option><option>Macau </option><option>Macedonia </option><option>Madagascar </option><option>Malawi </option><option>Malaysia </option><option>Maldives </option><option>Mali </option><option>Malta </option><option>Marshall Islands </option><option>Martinique (Hrench) </option><option>Mauritania </option><option>Mauritius </option><option>Mayotte </option><option>Mexico </option><option>Micronesia </option><option>Moldova </option><option>Monaco </option><option>Mongolia </option><option>Montenegro </option><option>Montserrat </option><option>Morocco </option><option>Mozambique </option><option>Myanmar </option><option>Namibia </option><option>Nauru </option><option>Nepal </option><option>Netherlands </option><option>Netherlands Antilles </option><option>NewCaledonia(Hrench) </option><option>NewZealand </option><option>Nicaragua </option><option>Niger </option><option>Nigeria </option><option>Niue </option><option>NorfolkIsland </option><option>NorthKorea </option><option>Northern Mariana Islands </option><option>Norway </option><option>Oman </option><option>Pakistan </option><option>Palau </option><option>Panama </option><option>Papua New Guinea </option><option>Paraguay </option><option>Peru </option><option>Philippines </option><option>Pitcairn Island </option><option>Poland </option><option>Polynesia(Hrench) </option><option>Portugal </option><option>PuertoRico </option><option>Qatar </option><option>Reunion </option><option>Romania </option><option>Russia </option><option>Rwanda </option><option>SaintHelena </option><option>Saint Kitts and Nevis </option><option>Saint Lucia </option><option>Saint Pierreand Miquelon </option><option>Saint Vincent and Grenadines </option><option>Samoa </option><option>San Marino </option><option>Sao Tome and Principe </option><option>Saudi Arabia </option><option>Senegal </option><option>Serbia </option><option>Seychelles </option><option>SierraLeone </option><option>Singapore </option><option>Slovakia </option><option>Slovenia </option><option>SolomonIslands </option><option>Somalia </option><option>SouthAfrica </option><option>South Georgia and South Sandwich Islands </option><option>SouthKorea </option><option>SouthSudan </option><option>Spain </option><option>SriLanka </option><option>Sudan </option><option>Suriname </option><option>Svalbard and Jan Mayen Islands </option><option>Swaziland </option><option>Sweden </option><option>Switzerland </option><option>Syria </option><option>Taiwan </option><option>Tajikistan </option><option>Tanzania </option><option>Thailand </option><option>Timor-Leste(EastTimor) </option><option>Togo </option><option>Tokelau </option><option>Tonga </option><option>Trinidad and Tobago </option><option>Tunisia </option><option>Turkey </option><option>Turkmenistan </option><option>Turks and Caicos Islands </option><option>Tuvalu </option><option>Uganda </option><option>Ukraine </option><option>United Arab Emirates </option><option>United Kingdom </option><option>United States </option><option>Uruguay </option><option>Uzbekistan </option><option>Vanuatu </option><option>Venezuela </option><option>Vietnam </option><option>Virgin Islands </option><option>Wallis and Hutuna Islands </option><option>Yemen </option><option>Zambia </option><option>Zimbabwe </option></select></div><div class="col-lg-4 col-sm-6 no_padding field_help_text">Please select country to see Loan(s)</div></div><div class="individual_item form-group clearfix"><label class="control-label required no_padding">Loan <span class="label_counter">1</span></label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select class="form-control search_selector auth_type_loan_loan_'+global_authorization_wrapper_count+'"><option>Select Loan</option><option value="1">Loan 1</option><option value="2">Loan 2</option><option value="3">Loan 3</option></select></div><div class="col-lg-4 col-sm-6"></div></div><div class="clearfix additional_loans"></div></div></div><a class="add_another_loan_'+global_authorization_wrapper_count+' add_link_loan" href="javascript:;">Add another Loan</a><hr/>');
        global_authorization_wrapper_count++;   
        $('.search_selector').select2({
            width: "100%"
        });     
    });
    

    $(document).on('click', '.del_complete_country_wrap_added', function(){
        $(this).parent().next().next().remove();
        $(this).parent().next().remove();
        $(this).parent().remove();
    });

    $(document).on('click', '.add_link_project_country', function(){
        
        
        $(this).prev('.additional_projects_country').append('<div class="project_wrap generated_row row pos_rel"><a href="javascript:;" class="del_complete_country_wrap_added"><span class="sprite sprite-ico_delete_x"></span></a><div class="col-xs-12"><div class="form-group clearfix"><label class="control-label required no_padding">Country</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select class="form-control search_selector auth_type_project_country_'+global_authorization_wrapper_count+'"><option>Country</option><option>Afghanistan </option><option>Albania </option><option>Algeria </option><option>American Samoa </option><option>Andorra </option><option>Angola </option><option>Anguilla </option><option>Antiguaand Barbuda </option><option>Argentina </option><option>Armenia </option><option>Aruba </option><option>Australia </option><option>Austria </option><option>Azerbaijan </option><option>Bahamas </option><option>Bahrain </option><option>Bangladesh </option><option>Barbados </option><option>Belarus </option><option>Belgium </option><option>Belize </option><option>Benin </option><option>Bermuda </option><option>Bhutan </option><option>Bolivia </option><option>Bosnia-Herzegovina </option><option>Botswana </option><option>Bouvet Island </option><option>Brazil </option><option>Brunei </option><option>Bulgaria </option><option>Burkina Haso </option><option>Burundi </option><option>Cambodia </option><option>Cameroon </option><option>Canada </option><option>Cape Verde </option><option>Cayman Islands </option><option>Central African Republic </option><option>Chad </option><option>Chile </option><option>China </option><option>Christmas Island </option><option>Cocos(Keeling)Islands </option><option>Colombia </option><option>Comoros </option><option>Congo,DemocraticRepublicofthe(Zaire) </option><option>Congo, Republic of CookIslands</option><option>CostaRica </option><option>Croatia </option><option>Cuba </option><option>Cyprus </option><option>Czech Republic </option><option>Denmark </option><option>Djibouti </option><option>Dominica </option><option>Dominican Republic </option><option>Ecuador </option><option>Egypt </option><option>ElSalvador </option><option>Equatorial Guinea </option><option>Eritrea </option><option>Estonia </option><option>Ethiopia </option><option>Halkland Islands </option><option>Haroe Islands </option><option>Hiji </option><option>Hinland </option><option>Hrance </option><option>Hrench Guiana </option><option>Gabon </option><option>Gambia </option><option>Georgia </option><option>Germany </option><option>Ghana </option><option>Gibraltar </option><option>Greece </option><option>Greenland </option><option>Grenada </option><option>Guadeloupe(Hrench) </option><option>Guam(USA) </option><option>Guatemala </option><option>Guinea </option><option>Guinea Bissau </option><option>Guyana </option><option>Haiti </option><option>HolySee </option><option>Honduras </option><option>HongKong </option><option>Hungary </option><option>Iceland </option><option>India </option><option>Indonesia </option><option>Iran </option><option>Iraq </option><option>Ireland </option><option>Israel </option><option>Italy </option><option>IvoryCoast(CoteD`Ivoire) </option><option>Jamaica </option><option>Japan </option><option>Jordan </option><option>Kazakhstan </option><option>Kenya </option><option>Kiribati </option><option>Kuwait </option><option>Kyrgyzstan </option><option>Laos </option><option>Latvia </option><option>Lebanon </option><option>Lesotho </option><option>Liberia </option><option>Libya </option><option>Liechtenstein </option><option>Lithuania </option><option>Luxembourg </option><option>Macau </option><option>Macedonia </option><option>Madagascar </option><option>Malawi </option><option>Malaysia </option><option>Maldives </option><option>Mali </option><option>Malta </option><option>Marshall Islands </option><option>Martinique (Hrench) </option><option>Mauritania </option><option>Mauritius </option><option>Mayotte </option><option>Mexico </option><option>Micronesia </option><option>Moldova </option><option>Monaco </option><option>Mongolia </option><option>Montenegro </option><option>Montserrat </option><option>Morocco </option><option>Mozambique </option><option>Myanmar </option><option>Namibia </option><option>Nauru </option><option>Nepal </option><option>Netherlands </option><option>Netherlands Antilles </option><option>NewCaledonia(Hrench) </option><option>NewZealand </option><option>Nicaragua </option><option>Niger </option><option>Nigeria </option><option>Niue </option><option>NorfolkIsland </option><option>NorthKorea </option><option>Northern Mariana Islands </option><option>Norway </option><option>Oman </option><option>Pakistan </option><option>Palau </option><option>Panama </option><option>Papua New Guinea </option><option>Paraguay </option><option>Peru </option><option>Philippines </option><option>Pitcairn Island </option><option>Poland </option><option>Polynesia(Hrench) </option><option>Portugal </option><option>PuertoRico </option><option>Qatar </option><option>Reunion </option><option>Romania </option><option>Russia </option><option>Rwanda </option><option>SaintHelena </option><option>Saint Kitts and Nevis </option><option>Saint Lucia </option><option>Saint Pierreand Miquelon </option><option>Saint Vincent and Grenadines </option><option>Samoa </option><option>San Marino </option><option>Sao Tome and Principe </option><option>Saudi Arabia </option><option>Senegal </option><option>Serbia </option><option>Seychelles </option><option>SierraLeone </option><option>Singapore </option><option>Slovakia </option><option>Slovenia </option><option>SolomonIslands </option><option>Somalia </option><option>SouthAfrica </option><option>South Georgia and South Sandwich Islands </option><option>SouthKorea </option><option>SouthSudan </option><option>Spain </option><option>SriLanka </option><option>Sudan </option><option>Suriname </option><option>Svalbard and Jan Mayen Islands </option><option>Swaziland </option><option>Sweden </option><option>Switzerland </option><option>Syria </option><option>Taiwan </option><option>Tajikistan </option><option>Tanzania </option><option>Thailand </option><option>Timor-Leste(EastTimor) </option><option>Togo </option><option>Tokelau </option><option>Tonga </option><option>Trinidad and Tobago </option><option>Tunisia </option><option>Turkey </option><option>Turkmenistan </option><option>Turks and Caicos Islands </option><option>Tuvalu </option><option>Uganda </option><option>Ukraine </option><option>United Arab Emirates </option><option>United Kingdom </option><option>United States </option><option>Uruguay </option><option>Uzbekistan </option><option>Vanuatu </option><option>Venezuela </option><option>Vietnam </option><option>Virgin Islands </option><option>Wallis and Hutuna Islands </option><option>Yemen </option><option>Zambia </option><option>Zimbabwe </option></select></div><div class="col-lg-4 col-sm-6 no_padding field_help_text">Please select country to see Project(s)</div></div><div class="individual_item form-group clearfix"><label class="control-label required no_padding">Project <span class="label_counter">1</span></label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select class="form-control search_selector auth_type_project_project_'+global_authorization_wrapper_count+'"><option>Select Project</option><option value="1">Project 1</option><option value="2">Project 2</option><option value="3">Project 3</option></select></div><div class="col-lg-4 col-sm-6"></div></div><div class="clearfix additional_projects"></div></div></div><a class="add_another_project_'+global_authorization_wrapper_count+' add_link_project" href="javascript:;">Add another Project</a><hr/>');
        global_authorization_wrapper_count++;   
        $('.search_selector').select2({
            width: "100%"
        });
    });
    
    /*generating the country wrap for authorization type script starts here*/
    
    function fn_generate_country_wrap(){
        //alert(auth_OrgFirstCountry)

        $('.new_added_authorization_wrapper .auth_country_wrap').append('<p class="auth_title">Authorization Type: Country <span class="auth_hint_txt">(Access is given to all Loans of the selected country)</span></p><div class="country_wrap generated_row row individual_item"><div class="col-xs-12"><div class="form-group clearfix"><label class="control-label required">Country</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select class="form-control search_selector auth_type_country_country_'+global_authorization_wrapper_count+'"><option>Country</option><option>Afghanistan </option><option>Albania </option><option>Algeria </option><option>American Samoa </option><option>Andorra </option><option>Angola </option><option>Anguilla </option><option>Antiguaand Barbuda </option><option>Argentina </option><option>Armenia </option><option>Aruba </option><option>Australia </option><option>Austria </option><option>Azerbaijan </option><option>Bahamas </option><option>Bahrain </option><option>Bangladesh </option><option>Barbados </option><option>Belarus </option><option>Belgium </option><option>Belize </option><option>Benin </option><option>Bermuda </option><option>Bhutan </option><option>Bolivia </option><option>Bosnia-Herzegovina </option><option>Botswana </option><option>Bouvet Island </option><option>Brazil </option><option>Brunei </option><option>Bulgaria </option><option>Burkina Haso </option><option>Burundi </option><option>Cambodia </option><option>Cameroon </option><option>Canada </option><option>Cape Verde </option><option>Cayman Islands </option><option>Central African Republic </option><option>Chad </option><option>Chile </option><option>China </option><option>Christmas Island </option><option>Cocos(Keeling)Islands </option><option>Colombia </option><option>Comoros </option><option>Congo,DemocraticRepublicofthe(Zaire) </option><option>Congo, Republic of CookIslands</option><option>CostaRica </option><option>Croatia </option><option>Cuba </option><option>Cyprus </option><option>Czech Republic </option><option>Denmark </option><option>Djibouti </option><option>Dominica </option><option>Dominican Republic </option><option>Ecuador </option><option>Egypt </option><option>ElSalvador </option><option>Equatorial Guinea </option><option>Eritrea </option><option>Estonia </option><option>Ethiopia </option><option>Halkland Islands </option><option>Haroe Islands </option><option>Hiji </option><option>Hinland </option><option>Hrance </option><option>Hrench Guiana </option><option>Gabon </option><option>Gambia </option><option>Georgia </option><option>Germany </option><option>Ghana </option><option>Gibraltar </option><option>Greece </option><option>Greenland </option><option>Grenada </option><option>Guadeloupe(Hrench) </option><option>Guam(USA) </option><option>Guatemala </option><option>Guinea </option><option>Guinea Bissau </option><option>Guyana </option><option>Haiti </option><option>HolySee </option><option>Honduras </option><option>HongKong </option><option>Hungary </option><option>Iceland </option><option>India </option><option>Indonesia </option><option>Iran </option><option>Iraq </option><option>Ireland </option><option>Israel </option><option>Italy </option><option>IvoryCoast(CoteD`Ivoire) </option><option>Jamaica </option><option>Japan </option><option>Jordan </option><option>Kazakhstan </option><option>Kenya </option><option>Kiribati </option><option>Kuwait </option><option>Kyrgyzstan </option><option>Laos </option><option>Latvia </option><option>Lebanon </option><option>Lesotho </option><option>Liberia </option><option>Libya </option><option>Liechtenstein </option><option>Lithuania </option><option>Luxembourg </option><option>Macau </option><option>Macedonia </option><option>Madagascar </option><option>Malawi </option><option>Malaysia </option><option>Maldives </option><option>Mali </option><option>Malta </option><option>Marshall Islands </option><option>Martinique (Hrench) </option><option>Mauritania </option><option>Mauritius </option><option>Mayotte </option><option>Mexico </option><option>Micronesia </option><option>Moldova </option><option>Monaco </option><option>Mongolia </option><option>Montenegro </option><option>Montserrat </option><option>Morocco </option><option>Mozambique </option><option>Myanmar </option><option>Namibia </option><option>Nauru </option><option>Nepal </option><option>Netherlands </option><option>Netherlands Antilles </option><option>NewCaledonia(Hrench) </option><option>NewZealand </option><option>Nicaragua </option><option>Niger </option><option>Nigeria </option><option>Niue </option><option>NorfolkIsland </option><option>NorthKorea </option><option>Northern Mariana Islands </option><option>Norway </option><option>Oman </option><option>Pakistan </option><option>Palau </option><option>Panama </option><option>Papua New Guinea </option><option>Paraguay </option><option>Peru </option><option>Philippines </option><option>Pitcairn Island </option><option>Poland </option><option>Polynesia(Hrench) </option><option>Portugal </option><option>PuertoRico </option><option>Qatar </option><option>Reunion </option><option>Romania </option><option>Russia </option><option>Rwanda </option><option>SaintHelena </option><option>Saint Kitts and Nevis </option><option>Saint Lucia </option><option>Saint Pierreand Miquelon </option><option>Saint Vincent and Grenadines </option><option>Samoa </option><option>San Marino </option><option>Sao Tome and Principe </option><option>Saudi Arabia </option><option>Senegal </option><option>Serbia </option><option>Seychelles </option><option>SierraLeone </option><option>Singapore </option><option>Slovakia </option><option>Slovenia </option><option>SolomonIslands </option><option>Somalia </option><option>SouthAfrica </option><option>South Georgia and South Sandwich Islands </option><option>SouthKorea </option><option>SouthSudan </option><option>Spain </option><option>SriLanka </option><option>Sudan </option><option>Suriname </option><option>Svalbard and Jan Mayen Islands </option><option>Swaziland </option><option>Sweden </option><option>Switzerland </option><option>Syria </option><option>Taiwan </option><option>Tajikistan </option><option>Tanzania </option><option>Thailand </option><option>Timor-Leste(EastTimor) </option><option>Togo </option><option>Tokelau </option><option>Tonga </option><option>Trinidad and Tobago </option><option>Tunisia </option><option>Turkey </option><option>Turkmenistan </option><option>Turks and Caicos Islands </option><option>Tuvalu </option><option>Uganda </option><option>Ukraine </option><option>United Arab Emirates </option><option>United Kingdom </option><option>United States </option><option>Uruguay </option><option>Uzbekistan </option><option>Vanuatu </option><option>Venezuela </option><option>Vietnam </option><option>Virgin Islands </option><option>Wallis and Hutuna Islands </option><option>Yemen </option><option>Zambia </option><option>Zimbabwe </option></select></div><div class="col-lg-4 col-sm-6"><p class="overdue_wrap"><input type="checkbox" id="view_over_'+global_authorization_wrapper_count+'" /><label class="css-labelChk sprite sprite-ico-checkbox" for="view_over_'+global_authorization_wrapper_count+'" rel="country">View Overdues</label></p><p class="row_deletor"><span rel="country_del" class="sprite sprite-ico_delete_bin delete_auth_type_child"></span></p></div></div></div></div><a class="add_another_country_'+global_authorization_wrapper_count+' add_link_country" href="javascript:;">Add another Country</a>');

        if(auth_OrgFirstCountry==true){
            $(".row_deletor").hide();
        }

        auth_OrgFirstCountry = false;

        $('.search_selector').select2({
            width: "100%"
        });
    };

    /*generating the country wrap for authorization type script ends here*/

 

    /*add authorization type link script starts here*/
    $(document).on('click','.add_link_country',function() {
        $(this).hide();
        fn_generate_country_wrap();
        global_authorization_wrapper_count++;
    });
	
	

    $(document).on('click','.ico-checkbox_switch',function() {
        var currentval_but = $(this).closest("div").attr("id");
       if($("#"+currentval_but).find(".ico-checkbox_switch").hasClass("ico-checkbox_switch_yes") == false){
            $(".right_popcon").find(".hide."+currentval_but).addClass("show");
       }
       else{
        
            $(".right_popcon").find(".hide."+currentval_but).removeClass("show");
       }
    });
    $(document).on('click','.add_link_borrow',function() {            
        $(this).prev('.borrow_wrap').find('.additional_borrows').append('<div class="clearfix row individual_item"><div class="col-xs-12"><div class="form-group clearfix"><label class="control-label required no_padding">Borrower(s) of Record <span class="label_counter"></span></label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select class="form-control search_selector auth_type_borrow_borrow_'+global_authorization_wrapper_count+'"><option value="0">Select Borrower of Record</option><option value="1">Acciona Wind Energy Private Limited</option><option value="2">Asian Electronics Limited</option><option value="3">Asian Heritage Foundation</option><option value="4">Azim Premji Foundation</option><option value="5">Bhakra Beas Management Board</option></select></div><div class="col-lg-4 col-sm-6"> <span class="info_wrapper"><a data-original-title="" class="info_links" tabindex="-1" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem ipsum set dolar amit de. Lorem ipsum set dolar."><span class="sprite sprite-ico_info"></span></a></span><p class="overdue_wrap"><input type="checkbox" id="view_over_'+global_authorization_wrapper_count+'" /><label class="css-labelChk sprite sprite-ico-checkbox" for="view_over_'+global_authorization_wrapper_count+'" rel="country">View Overdues</label></p><p class="row_deletor"><span rel="borrow_del" class="sprite sprite-ico_delete_bin delete_auth_type_child"></span></p></div></div></div></div>');
        global_authorization_wrapper_count++;
        $('.search_selector').select2({
            width: "100%"
        });
        var total_projects_counter = $(this).prev('.generated_row').find('.label_counter').length;
        $(this).prev('.borrow_wrap').find('.additional_borrows').children('.row:last-child').find('.label_counter').text(total_projects_counter);


    });
    $(document).on('click','.add_link_project',function() {
        //fn_generate_project_wrap();
        $(this).prev('.project_wrap').find('.additional_projects').append('<div class="clearfix row individual_item"><div class="col-xs-12"><div class="form-group clearfix"><label class="control-label required no_padding">Project <span class="label_counter"></span></label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select class="form-control search_selector auth_type_project_project_'+global_authorization_wrapper_count+'"><option>Select Project</option><option value="1">Project 1</option><option value="2">Project 2</option><option value="3">Project 3</option></select></div><div class="col-lg-4 col-sm-6"><span rel="project_del" class="sprite sprite-ico_delete_bin delete_auth_type_child"></span></div></div></div></div>');
        global_authorization_wrapper_count++;
        $('.search_selector').select2({
            width: "100%"
        });
        var total_projects_counter = $(this).prev('.generated_row').find('.label_counter').length;
        $(this).prev('.project_wrap').find('.additional_projects').children('.row:last-child').find('.label_counter').text(total_projects_counter);

    });
    $(document).on('click','.add_link_loan',function() {
        //alert('link loan');
        $(this).prev('.loan_wrap').find('.additional_loans').append('<div class="clearfix row individual_item"><div class="col-xs-12"><div class="form-group clearfix"><label class="control-label required no_padding">Loan <span class="label_counter"></span></label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select class="form-control search_selector auth_type_loan_loan_'+global_authorization_wrapper_count+'"><option>Select Loan</option><option value="1">Loan 1</option><option value="2">Loan 2</option><option value="3">Loan 3</option></select></div><div class="col-lg-4 col-sm-6"><span rel="loan_del" class="sprite sprite-ico_delete_bin delete_auth_type_child"></span></div></div></div></div>');
        global_authorization_wrapper_count++;
        $('.search_selector').select2({
            width: "100%"
        });
        var total_projects_counter = $(this).prev('.generated_row').find('.label_counter').length;
        $(this).prev('.loan_wrap').find('.additional_loans').children('.row:last-child').find('.label_counter').text(total_projects_counter);
        
    });
    /*add authorization type link script ends here*/


/* delete button function */


var current_div_data = null;   
var current_div_data_addlink;
    $(document).on('click','.delete_popup_section', function() {  
        var auth_type_txt = $(this).attr('rel');     
        if(auth_type_txt == "portfolio_del"){
        current_div_data = $(this).parents('.popup_hide_con');
		current_div_data_addlink = $(this).parents(".popup_hide_section");
		$(".dele_yes").click(function(){
			$(current_div_data).remove();
			$(current_div_data_addlink).find(".popup_hide_con").last().find(".add-investor-Contact1").show();
			if($(current_div_data_addlink).find(".popup_hide_con").length > 1){
				$(current_div_data_addlink).find(".popup_hide_con").first().find(".delete_img").removeClass("hide");					
			}
			else{
				$(current_div_data_addlink).find(".popup_hide_con").first().find(".delete_img").addClass("hide");
						         $(current_div_data_addlink).find(".popup_hide_con").first().css("border-top","0px");
			}			
			})
        $(".dele_no").click(function(){current_div_data = null;})

        }   
    });

    $(document).on('click','.add_client_type_delete', function() {  
        var auth_type_txt = $(this).attr('rel');     
        if(auth_type_txt == "clienttype_del"){
        current_div_data = $(this).parents('.Client_type_section');
        $(".dele_yes").click(function(){
			$(current_div_data).remove();
					
		if($(".Client_type_container").find(".Client_type_section").length > 1){
				$(".Client_type_container").find(".Client_type_section").first().find(".remove_client").removeClass("hide");
						console.log($(".Client_type_container").find(".Client_type_section").length>1,"aaa");
			}
			else{
				$(".Client_type_container").find(".Client_type_section").first().find(".remove_client").addClass("hide");
						console.log($(".Client_type_container").find(".Client_type_section").length>1,"bbb");
				}
		
			})
        $(".dele_no").click(function(){current_div_data = null;})
			
//		$(".Client_type_section").find(".remove_client").removeClass("hide");
        }   
    });

/* delete button function */    

    /*delete single row item like projects, loans, borrows of record starts*/
    
    $(document).on('click','.delete_auth_type_child', function() {
        //alert(0)
        var auth_type_txt = $(this).attr('rel');
        
        var individual_item_count = $(this).parents('.generated_row').find('.individual_item').length;

        var auth_type_item_count = $(this).parents('.auth_wrap_for_count').find('.individual_item').length;

        
        if(individual_item_count <= 1){
            if(auth_type_item_count <= 1){
                if(auth_type_txt == "borrow_del"){
                    var checkBox_new_country = $('[rel="borrow"]').parent().find(":checkbox");              
                    checkBox_new_country.prop('checked', false);
                    $(this).parents('.auth_wrap_for_count').empty().hide();
                }
                else if(auth_type_txt == "project_del"){
                    var checkBox_new_country = $('[rel="project"]').parent().find(":checkbox");             
                    checkBox_new_country.prop('checked', false);
                    $(this).parents('.auth_wrap_for_count').empty().hide();
                }
                else if(auth_type_txt == "country_del"){
                    var checkBox_new_country = $('[rel="country"]').parent().find(":checkbox");             
                    checkBox_new_country.prop('checked', false);
                    $(this).parents('.auth_wrap_for_count').empty().hide();
                }
                else if(auth_type_txt == "loan_del"){
                    var checkBox_new_country = $('[rel="loan"]').parent().find(":checkbox");             
                    checkBox_new_country.prop('checked', false);
                    $(this).parents('.auth_wrap_for_count').empty().hide();
                }
            }
           /* if(auth_type_txt == "client_del"){
               
                $(this).parents('.popup_hide_con').remove();
            }*/
            if(auth_type_txt == "country_del"){
                /*do not remove the add another country here for country section*/
                $(this).parents('.individual_item').remove();
            }

            else{
                $(this).parents('.generated_row').next().next().remove();
                $(this).parents('.generated_row').next().remove();
                $(this).parents('.generated_row').remove();
            }            
        }
        else{
            $(this).parents('.individual_item').remove();
        }
    });
    /*delete single row item like projects, loans, borrows of record starts*/
    

    /*delete authorization type link script starts here*/
    $(document).on('click','.delete_auth_type',function() {
        if($(this).parents('.auth_wrap_for_count').find('.generated_row').length <= 1){
            
            var auth_type_delete = $(this).attr('rel');
            if(auth_type_delete == 'borrow_del'){
                var checkBox_new_country = $('[rel="borrow"]').parent().find(":checkbox");              
                checkBox_new_country.prop('checked', false);
                $(this).parents('.auth_wrap_for_count').find('.add_link_borrow_country').remove();
                $(this).parents('.auth_wrap_for_count').find('hr').remove();
            }
            if(auth_type_delete == 'country_del'){
                var checkBox_new_country = $('[rel="country"]').parent().find(":checkbox");             
                checkBox_new_country.prop('checked', false);
            }
            if(auth_type_delete == 'project_del'){
                var checkBox_new_country = $('[rel="project"]').parent().find(":checkbox");             
                checkBox_new_country.prop('checked', false);
                $(this).parents('.auth_wrap_for_count').find('.add_link_project_country').remove();
                $(this).parents('.auth_wrap_for_count').find('hr').remove();
            }
            if(auth_type_delete == 'loan_del'){
                var checkBox_new_country = $('[rel="loan"]').parent().find(":checkbox");                
                checkBox_new_country.prop('checked', false);
                $(this).parents('.auth_wrap_for_count').find('.add_link_loan_country').remove();
                $(this).parents('.auth_wrap_for_count').find('hr').remove();
            }            
            
            $(this).parents('.auth_wrap_for_count').hide();            
        }
        $(this).parents('.generated_row').next().next().remove();
        $(this).parents('.generated_row').next().remove(); //removing the section add link
        $(this).parents('.generated_row').remove(); //removing the item
    });
    /*delete authorization type link script ends here*/





    /*liaison details scripts starts here*/
    var global_liaison_count = 2;

    $(document).on('click','.add_liaison_link', function(){
        $('.liaison_wrap_added').show();
        global_liaison_count++;
        fn_generate_liaison_wrap();
        $(this).hide();     
    });

    /*generating the liaison wrap for authorization type script starts here*/
    function fn_generate_liaison_wrap(){
        $('.liaison_wrap_added').append('<div class="liaison_item"><fieldset><legend class="clearfix"> <span class="pull-left">Liaison Details: No. '+global_liaison_count+'</span> <span class="info_wrapper"> <a data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." title="" data-trigger="focus" data-toggle="popover" role="button" class="info_links" tabindex="-1" data-original-title=""> <span class="sprite sprite-ico_info"></span> </a> </span> <span rel="liaison_del" class="sprite sprite-ico_delete_x delete_liaison"></span></legend><div class="col-md-12"><div class="form-group clearfix"><label for="inputOrgFNameLiaison_'+global_liaison_count+'" class="control-label required">First Name</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><input type="text" class="form-control" id="inputOrgFNameLiaison_'+global_liaison_count+'" placeholder="First Name"></div><div class="col-lg-4 col-sm-6 no_padding"></div></div><div class="form-group clearfix"><label for="inputOrgMNameLiaison_'+global_liaison_count+'" class="control-label">Middle Name</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><input type="text" class="form-control" id="inputOrgMNameLiaison_'+global_liaison_count+'" placeholder="Middle Name"></div><div class="col-lg-4 col-sm-6 no_padding"></div></div><div class="form-group clearfix"><label for="inputOrgLNameLiaison_'+global_liaison_count+'" class="control-label required">Last Name</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><input type="text" class="form-control" id="inputOrgLNameLiaison_'+global_liaison_count+'" placeholder="Last Name"></div><div class="col-lg-4 col-sm-6 no_padding"></div></div><div class="form-group clearfix"><label for="inputOrgJobTitleLiaison_'+global_liaison_count+'" class="control-label">Job Title</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><input type="text" class="form-control" id="inputOrgJobTitleLiaison_'+global_liaison_count+'" placeholder="Job title"></div><div class="col-lg-4 col-sm-6 no_padding"> <span class="info_wrapper"> <a data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." title="" data-trigger="focus" data-toggle="popover" role="button" class="info_links" tabindex="-1" data-original-title=""> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div><div class="form-group clearfix"><label for="inputOrgUserEmailLiaison_'+global_liaison_count+'" class="control-label required">Email</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><input type="text" class="form-control" id="inputOrgUserEmailLiaison_'+global_liaison_count+'" placeholder="Email"></div><div class="col-lg-4 col-sm-6 no_padding"> <span class="info_wrapper"> <a data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." title="" data-trigger="focus" data-toggle="popover" role="button" class="info_links" tabindex="-1" data-original-title=""> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div><div class="form-group clearfix"><label for="inputOrgTeleLiaison_'+global_liaison_count+'" class="control-label required">Telephone Number</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><input class="form-control" id="inputOrgTeleLiaison_'+global_liaison_count+'" placeholder="Telephone Number" type="text"></div><div class="col-lg-4 col-sm-6 no_padding"> <span class="info_wrapper"> <a data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." title="" data-trigger="focus" data-toggle="popover" role="button" class="info_links" tabindex="-1" data-original-title=""> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div><div class="form-group clearfix"><label for="inputOrgMobLiaison_'+global_liaison_count+'" class="control-label">Mobile Number</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><input class="form-control" id="inputOrgMobLiaison_'+global_liaison_count+'" placeholder="Mobile Number" type="text"></div><div class="col-lg-4 col-sm-6 no_padding"><span class="info_wrapper"> <a data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." title="" data-trigger="focus" data-toggle="popover" role="button" class="info_links" tabindex="-1" data-original-title=""> <span class="sprite sprite-ico_info"></span> </a> </span></div></div><a href="javascript:;" class="add_liaison_link add_lia_first">Add another Liaison</a> </div></fieldset></div>');
        $('.info_links').popover({
            placement:'top'
        });
    }
    /*generating the liaison wrap for authorization type script ends here*/

    /*deleting the liaison wrap for authorization type script starts here*/
    $(document).on('click','.delete_liaison', function(){
        global_liaison_count--;

        $(this).parents('.liaison_item').prev().find('.add_liaison_link').show();
        $(this).parents('.liaison_item').remove();
        if($('.liaison_item').length == 0){
            $('.add_lia_first').show();
        }

    });
    /*deleting the liaison wrap for authorization type script ends here*/





    /*authorization rep details starts here*/
    
    $('#au_rep_available').click(function(){
        $('.yes_au_rep_available').toggle();
    });


    var global_AuRep_count = 1;

    $(document).on('click','.add_AuRep_link', function(){
        $('.au_rep_wrap_added').show();
        global_AuRep_count++;
        fn_generate_au_rep_wrap();
        $(this).hide();     
    });

    /*generating the authorization rep wrap for authorization type script starts here*/
    function fn_generate_au_rep_wrap(){
        $('.au_rep_wrap_added').append('<div class="auRep_item"><fieldset><legend class="clearfix"> <span class="pull-left">Authorization Representative Details: '+global_AuRep_count+'</span> <span class="info_wrapper"> <a data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." title="" data-trigger="focus" data-toggle="popover" role="button" class="info_links" tabindex="-1" data-original-title=""> <span class="sprite sprite-ico_info"></span> </a> </span> <span class="sprite sprite-ico_delete_x delete_auRep" rel="auRep_del"></span></legend><div class="col-md-12"><div class="form-group clearfix"><label for="inputOrgFNameauRep_'+global_AuRep_count+'" class="control-label required">First Name</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><input type="text" class="form-control" id="inputOrgFNameauRep_'+global_AuRep_count+'" placeholder="First Name"></div><div class="col-lg-4 col-sm-6 no_padding"></div></div><div class="form-group clearfix"><label for="inputOrgMNameauRep_'+global_AuRep_count+'" class="control-label">Middle Name</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><input type="text" class="form-control" id="inputOrgMNameauRep_'+global_AuRep_count+'" placeholder="Middle Name"></div><div class="col-lg-4 col-sm-6 no_padding"></div></div><div class="form-group clearfix"><label for="inputOrgLNameauRep_'+global_AuRep_count+'" class="control-label required">Last Name</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><input type="text" class="form-control" id="inputOrgLNameauRep_'+global_AuRep_count+'" placeholder="Last Name"></div><div class="col-lg-4 col-sm-6 no_padding"></div></div><div class="form-group clearfix"><label for="inputOrgJobTitleauRep_'+global_AuRep_count+'" class="control-label">Job Title</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><input type="text" class="form-control" id="inputOrgJobTitleauRep_'+global_AuRep_count+'" placeholder="Job title"></div><div class="col-lg-4 col-sm-6 no_padding"> <span class="info_wrapper"> <a data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." title="" data-trigger="focus" data-toggle="popover" role="button" class="info_links" tabindex="-1" data-original-title=""> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div><div class="form-group clearfix"><label for="inputOrgTeleauRep_'+global_AuRep_count+'" class="control-label required">Telephone Number</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><input class="form-control" id="inputOrgTeleauRep_'+global_AuRep_count+'" placeholder="Telephone Number" type="text"></div><div class="col-lg-4 col-sm-6 no_padding"> <span class="info_wrapper"> <a data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." title="" data-trigger="focus" data-toggle="popover" role="button" class="info_links" tabindex="-1" data-original-title=""> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div><div class="form-group clearfix"><label for="inputOrgMobauRep_'+global_AuRep_count+'" class="control-label">Mobile Number</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><input class="form-control" id="inputOrgMobauRep_'+global_AuRep_count+'" placeholder="Mobile Number" type="text"></div><div class="col-lg-4 col-sm-6 no_padding"><span class="info_wrapper"> <a data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." title="" data-trigger="focus" data-toggle="popover" role="button" class="info_links" tabindex="-1" data-original-title=""> <span class="sprite sprite-ico_info"></span> </a> </span></div></div><a class="add_AuRep_link add_auRep_first" href="javascript:;">Add another Authorized Representative</a></fieldset></div>');
        $('.info_links').popover({
            placement:'top'
        });
    }
    /*generating the authorization rep wrap for authorization type script ends here*/


    /*deleting the authorization rep wrap for authorization type script starts here*/
    $(document).on('click','.delete_auRep', function(){
        global_AuRep_count--;

        $(this).parents('.auRep_item').prev().find('.add_AuRep_link').show();
        $(this).parents('.auRep_item').remove();
        if($('.auRep_item').length == 0){
            $('.add_auRep_first').show();
        }

    });
    /*deleting the authorization rep wrap for authorization type script ends here*/
    

    /*authorization rep details ends here*/

    $('.orgReview_link').click(function(){
        window.location.href = 'organization_review.html';
    })
	 $('.guaMiga_link').click(function(){
        window.location.href = 'login_investment.html';
    })
    $('.guaReview_link').click(function(){
        window.location.href = 'investment_guarantee_review.html';
    })

    $('.investSetup_link').click(function(){
        window.location.href = 'investment_guarantee_setup.html';
    })
    /*org review page starts*/
    /*org review terms and condition starts*/
    $(document).on('click', '.accept_terms_condition', function(){
        var _accept_terms_condition = $('#termsAndConditions').parent().find(":checkbox");
        _accept_terms_condition.prop('checked', true);
    });
    /*org review terms and condition starts*/

    /*org review submit starts*/
    $(document).on('click', '.submit_org_review', function(){
        alert('Submitted. Please redirect to required page.');
        //window.location.href = 'organization_review.html';
    });
    /*org review submit starts*/

    /*org review submit starts*/
    $(document).on('click', '.delete_org_review', function(){
        alert('Delete. Please redirect to required page.');
        //window.location.href = 'organization_review.html';
    });
    /*org review submit starts*/
    
    
    
    $(document).on('click', '.create_org', function(){
        window.location.href = 'organization_setup.html';
    });

    /*org review page ends*/ 

    /*Login page starts*/
    $(document).on('click', '.more_Content', function(){
        var text = $(this).text();
        if(text == "More..."){
            $(this).text('Less...');
        }
        else if(text == "Less..."){
            $(this).text('More...');
        }
    });
    /*Login page ends*/

    /*user add page starts*/
    $(document).on('change','#inputCounName', function(){
        $('.accessType_wrap, .clientType_wrap').show();
    });
    /*user add page ends*/


    /*my profile page scripts starts*/
    
    

    $(document).on('click','.pw_change_link', function(){
        $('.section_5 .edit_fields_wrap').show();
        $('.section_5 .save_links').show();
        $('.section_5 .read_fields_wrap').hide();
        $('.section_5 .edit_field_link').hide();
        $('.pw_change_wrap').hide();
        $('.pw_wrapper').addClass('show_pw_wrap');
    });

    $(document).on('click','.upload_photo_link', function(){
        $('.upload_photo').trigger('click');
    });
    

    /*my profile page scripts ends*/

    /*user provision page scripts starts*/
    $(document).on('click','.role_option_wrap .css-labelChk', function(){
        var checkBox_Role_Assign = $(this).parent().find(":checkbox");
        var item_roleSelected = $(this).text();
        var item_roleSelected_className = $(this).attr('rel');

        if(checkBox_Role_Assign.is(":checked")){
            $('#proposedRole_table tbody').find('.'+item_roleSelected_className).remove();
            $(this).parents('.role_option_wrap').removeClass('selected');
        }

        else{
            $(this).parents('.role_option_wrap').addClass('selected');
            $('#proposedRole_table tbody').append('<tr class="'+item_roleSelected_className+'"><td>'+item_roleSelected+'</td></tr>');
        }
    });

    $(document).on('click','#role_WBApp_CD', function(){
        $('.wb_approver_wrap').toggle();

    });

    $(document).on('change','#WBapprover_country', function(){
        $('.WBApp_country_list').remove();

        var WBApp_country_list_item = $(this).val();
        WBApp_country_list_item = WBApp_country_list_item.join();
        WBApp_country_list_item = WBApp_country_list_item.replace(/\,/g,", ");
        $('#proposedRole_table tbody').find('.WBapprover').children().append('<span class="WBApp_country_list"> - '+WBApp_country_list_item+'</span>');
    });


    
    $(document).on('click','#role_CDBack', function(){
        $('.CDBack_wrap').toggle();        
    });

    

    $(document).on('change','#CountryDirectorbackup_country', function(){
        $('.CountryDirectorbackup_country_list').remove();

        var CountryDirectorbackup_country_list_item = $(this).val();
        CountryDirectorbackup_country_list_item = CountryDirectorbackup_country_list_item.join();
        CountryDirectorbackup_country_list_item = CountryDirectorbackup_country_list_item.replace(/\,/g,", ");
        $('#proposedRole_table tbody').find('.CountryDirectorbackup').children().append('<span class="CountryDirectorbackup_country_list"> - '+CountryDirectorbackup_country_list_item+'</span>');
    
    });

    $(document).on('blur','#CountryDirectorbackup_dateFrom', function(){
        var role_from_date = $(this).val();
        $('.CountryDirectorbackup_dateFrom').remove();

        $('#proposedRole_table tbody').find('.CountryDirectorbackup').children().append('<span class="CountryDirectorbackup_dateFrom"> - From: '+role_from_date+'</span>');

    });

    $(document).on('blur','#CountryDirectorbackup_dateTo', function(){
        var role_to_date = $(this).val();
        $('.CountryDirectorbackup_dateTo').remove();

        $('#proposedRole_table tbody').find('.CountryDirectorbackup').children().append('<span class="CountryDirectorbackup_dateTo"> - To: '+role_to_date+'</span>');

    });
    


    
    $(document).on('click','#role_WBReview', function(){
        $('.wb_review_wrap').toggle();
    });
    

    $(document).on('change','#WBreviewer_country', function(){
        $('.WBReview_country_list').remove();

        var WBReview_country_list_item = $(this).val();
        WBReview_country_list_item = WBReview_country_list_item.join();
        WBReview_country_list_item = WBReview_country_list_item.replace(/\,/g,", ");
        $('#proposedRole_table tbody').find('.WBreviewer').children().append('<span class="WBReview_country_list"> - '+WBReview_country_list_item+'</span>');
    });




    $(document).on('click','#role_CCChamp', function(){
        $('.CCBack_wrap').toggle();
    });





    $(document).on('change','#CCChampionbackup_country', function(){
        $('.CCChampionbackup_country_list').remove();

        var CCChampionbackup_country_list_item = $(this).val();
        CCChampionbackup_country_list_item = CCChampionbackup_country_list_item.join();
        CCChampionbackup_country_list_item = CCChampionbackup_country_list_item.replace(/\,/g,", ");
        $('#proposedRole_table tbody').find('.CCChampionbackup').children().append('<span class="CCChampionbackup_country_list"> - '+CCChampionbackup_country_list_item+'</span>');
    
    });

    $(document).on('blur','#CCChampionbackup_dateFrom', function(){
        var role__from_date = $(this).val();
        $('.CCChampionbackup_dateFrom').remove();

        $('#proposedRole_table tbody').find('.CCChampionbackup').children().append('<span class="CCChampionbackup_dateFrom"> - From: '+role__from_date+'</span>');

    });

    $(document).on('blur','#CCChampionbackup_dateTo', function(){
        var role__to_date = $(this).val();
        $('.CCChampionbackup_dateTo').remove();

        $('#proposedRole_table tbody').find('.CCChampionbackup').children().append('<span class="CCChampionbackup_dateTo"> - To: '+role__to_date+'</span>');

    });


    
    /*user provision page scripts ends*/


    /*my portfolio starts*/
    $('#radio_projects_portfolio').click(function() {
        $('.project_portfolio').show();
        $('.loan_portfolio').hide();
    });
    
    
    $('#radio_loans_portfolio').click(function() {
        $('.project_portfolio').hide();
        $('.loan_portfolio').show();
    });

    $('.row_info').click(function(){
        $('.overview_pop_wrap').hide();
        var pos = $(this).position();
        $(this).next('.overview_pop_wrap').show().addClass('overview_pop_position');
    });
    $(document).click(function() { 
        $('.overview_pop_wrap').hide();
    }); 
    
    $('.row_info, .overview_pop_wrap').click(function(event){
       event.stopPropagation();
    });
    /*my portfolio ends*/


    /*header language select starts */
    $('.header_language').select2({
        minimumResultsForSearch: Infinity,
		width: "auto"
    });

    /*header language select ends */
	
	/* Set the value of button to approve if super user is checked*/
	$('#role_superUser').click(function(){
        if($(this).prop("checked") == true){
            $('.btn_green').val('Submit');
        }
        else if($(this).prop("checked") == false){
            $('.btn_green').val('Approve');
        }
	});




    /*create asl starts here*/

    /*select loan starts*/
    $(document).on('click', '.row_item_selector_step1 thead tr .row_item_selected', function(){
        $(this).parents('tr').toggleClass('selected_row');
        $('.row_item_selector_step1 tbody tr').trigger('click');
    });

    $(document).on('click', '.row_item_selector_step1 tbody tr', function(){
        var rel_name = $(this).attr('rel');

        if($(this).children().hasClass('highlight_text')){

        }
        else{
            $(this).toggleClass('selected_row');
            var items_counter = $('.row_item_selector_step1 .selected_row').length;

            if($(this).hasClass('selected_row')){

                
                if(items_counter == 1){
                    $('.eSignator, .selected_count_loan').removeClass('hide');
                    $('.selected_count_loan a').html("Selected ("+ items_counter +")");
                    $('.selected_loan_number_table_wrapper table tbody').append('<tr class="'+rel_name+'">'+$(this).html() + '<td><span class="sprite sprite-ico_delete_bin delete_loannumber"></span></td>' +  '</tr>');
                }
                else if( items_counter == 0){
                    $('.eSignator').addClass('hide');
                    $('.selected_count_loan').addClass('hide');
                    $('.selected_loan_number_table_wrapper table tbody').empty();
                }
                else {
                    $('.eSignator').addClass('hide');
                    $('.selected_count_loan a').html("Selected ("+ items_counter +")");
                    $('.selected_loan_number_table_wrapper table tbody').append('<tr class="'+rel_name+'">'+$(this).html() + '<td><span class="sprite sprite-ico_delete_bin delete_loannumber"></span></td>' + '</tr>');
                }
            }
            else{
                $('.'+rel_name).remove();
                $('.selected_count_loan a').html("Selected ("+ items_counter +")");
                
                if(items_counter == 0){
                    $('.eSignator').addClass('hide');
                    $('.selected_count_loan').addClass('hide');
                    $('.selected_loan_number_table_wrapper table tbody').empty();
                }
                else if(items_counter == 1){
                    $('.eSignator, .selected_count_loan').removeClass('hide');
                    $('.selected_count_loan a').html("Selected ("+ items_counter +")");                    
                }
            }
        }
    });

    /* added on 24-Feb-2016 */
    $(document).on('click','.delete_loannumber',function(){
        var removeitem = $(this).parents('tr').attr('class');
        $('.row_item_selector_step1 tr.selected_row').each(function(){
            if($(this).attr('rel') == removeitem)
            {
                $(this).removeClass('selected_row');
            }
        });
        $(this).parents('tr').remove();
        $('.row_item_selector_step1 thead tr').removeClass('selected_row');
    });

    $(document).on('click','.delete_loannumber_step2',function(){
        $(this).parents('.tab-pane').find('> table').find('thead').children('tr').removeClass('selected_row');
        if($(this).parents('table').children('tbody').children('tr').length == 1){
            $(this).parents('.table').next('.required_esgin_wrap').hide();
        }


        var removeitem = $(this).parents('tr').attr('class');
        $('.row_item_selector_step2 tr.selected_row').each(function(){
            if($(this).attr('rel') == removeitem)
            {
                $(this).removeClass('selected_row');
            }
        });
        $(this).parents('tr').remove();

    });

    $(document).on('click','.selected_loan_number_table_link', function() {
        
        $('.row_item_selector_step1').hide();
        $('.selected_loan_number_table_wrapper').removeClass('hide');
        $('.selected_loan_number_table_wrapper').show();
        $('.avaliable_loan').addClass('active');
        $(this).addClass('blk_link');
    });
    $(document).on('click','.avaliable_loan.active', function() {
        $('.row_item_selector_step1').show();
        $('.selected_loan_number_table_wrapper').hide();
        $('.avaliable_loan').removeClass('active');
        $('.selected_loan_number_table_link').removeClass('blk_link');

    });

    $(document).on('click','#esignator_checkbox', function() {
        if($(this).prop("checked") == true){
            $('.step2 .collapseThreeDA').removeClass('hide');
            $('.step2 .collapseFourDA').addClass('hide');
            $('.DA_Level').removeClass('hide');
            $('.step4 .da_level_indicator_number').text('4');               
        }
        else{
            $('.step2 .collapseThreeDA').addClass('hide');
            $('.step2 .collapseFourDA').removeClass('hide');
            $('.DA_Level').addClass('hide');
            $('.step4 .da_level_indicator_number').text('3');
        }
    });

        
    /*select loan starts*/


    /*create asl starts here*/    


    /*** Add a Tab for ASL starts*/
    $('#btnAddPage').click(function() {
      pageNum++;
      if(pageNum >= maxPageNum){
        alert("Maximum groups added.");
      }
      else{
        $('#pageTab').append(
          $('<li><a href="#page' + pageNum + '">' +
          'Group ' + pageNum +
          '<button class="close" type="button" ' +
          'title="Remove this page">X</button>' +
          '</a></li>'));

        $('#pageTabContent').append(
          $('<div class="tab-pane" id="page'+pageNum+'"><div class="section_title_table clearfix"><h6 class="pull-left avaliable_loan">All Users</h6><div class="table_utils asl_page"><span class="search_field_wrap pull-left"><input type="text" placeholder="User" class="form-control search_field"><span class="sprite sprite-ico_search_field"></span></span></div></div><table width="90%" align="center" cellpadding="0" cellspacing="0" class="tbl table tbl_type2 row_item_selector_step2 group'+pageNum+'"><thead><tr><th width="5%" class="no_rt_bdr"><div class="row_item_selected"> <span class="sprite sprite-ico_tick"></span> </div></th><th width="25%" class="no_lt_bdr"><a href="javascript:;" class="sort_column">User Name</a></th><th width="25%"><a href="javascript:;">Title</a></th><th width="35%"><a href="javascript:;">Organization</a></th><th width="10%"><a href="javascript:;">Status</a></th></tr></thead><tbody><tr rel="group_'+pageNum+'_row_1"><td><div class="row_item_selected"> <span class="sprite sprite-ico_tick"></span> </div></td><td>Michael Augustin '+pageNum+'</td><td>Division Chief</td><td>Cross River State PFMU</td><td>Active</td></tr><tr rel="group_'+pageNum+'_row_2"><td><div class="row_item_selected"> <span class="sprite sprite-ico_tick"></span> </div></td><td>IDS Scudder</td><td>Assistant Project Accountant</td><td>National Project Coordination Unit</td><td>Active</td></tr><tr rel="group_'+pageNum+'_row_3"><td><div class="row_item_selected"> <span class="sprite sprite-ico_tick"></span> </div></td><td>Nikhil Mathew</td><td>Junior Accounts Officer</td><td>CORAF/WECARD</td><td>Pending</td></tr><tr rel="group_'+pageNum+'_row_4"><td><div class="row_item_selected"> <span class="sprite sprite-ico_tick"></span> </div></td><td>John Peter</td><td>State Expert</td><td>Cross River State PFMU</td><td>Pending</td></tr><tr rel="group_'+pageNum+'_row_5"><td><div class="row_item_selected"> <span class="sprite sprite-ico_tick"></span> </div></td><td>Julia Harpings</td><td>Secretary General</td><td>CORAF/WECARD</td><td>Active</td></tr><tr rel="group_'+pageNum+'_row_6"><td><div class="row_item_selected"> <span class="sprite sprite-ico_tick"></span> </div></td><td>Michael Augustin</td><td>Project Coordinator</td><td>National Project Coordination Unit</td><td>Active</td></tr><tr rel="group_'+pageNum+'_row_7"><td><div class="row_item_selected"> <span class="sprite sprite-ico_tick"></span> </div></td><td>IDS Scudder</td><td>Assistant Project Accountant</td><td>National Project Coordination Unit</td><td>Pending</td></tr></tbody></table><div class="section_title_table"><h6 class="avaliable_loan">Selected Users</h6></div><div class="group_'+pageNum+'_selected_user_table_wrapper selected_user_table"><table width="90%" align="center" cellpadding="0" cellspacing="0" class="tbl table tbl_type2 group'+pageNum+'" rel="group'+pageNum+'"><thead><tr><th width="1%" class="no_rt_bdr"></th><th width="20%" class="no_lt_bdr"><a href="javascript:;" class="sort_column">User Name</a></th><th width="25%"><a href="javascript:;">Title</a></th><th width="25%"><a href="javascript:;">Organization</a></th><th width="10%"><a href="javascript:;">Status</a></th><th width="10%"><a href="javascript:;">Mandatory?</a></th><th width="7%"><span class="sprite sprite-ico_delete_bin delete_loannumber_step2_delete_all"></span></th></tr></thead><tbody></tbody></table><div  class="required_esgin_wrap clearfix"><div class="table_utils"><label class="normal_txt">Required eSignatories</label><select class="form-control input-sm"><option>1</option><option>2</option><option>3</option><option>4</option></select></div></div></div></div>'));
        

          $('#page'+pageNum).tab('show');
        }
    });

    
    $(document).on('click','.ico-checkbox_switch', function(event){
	   if (!$(this).hasClass('disabled_switch'))
		{			
			$(this).toggleClass('ico-checkbox_switch_yes');		        
		}
		event.stopPropagation();
    });

	

    /*** Remove a Tab*/
    $('#pageTab').on('click', ' li a .close', function() {
        var tabId = $(this).parents('li').children('a').attr('href');
        delGroup = tabId;
        $('.deleteGroup-modal-sm').modal();
        /*$(this).parents('li').remove('li');
        $(tabId).remove();
        reNumberPages();
        $('#pageTab a:first').tab('show');*/
    });

    $(document).on('click','.deleteGroup_Action', function(){
        $(delGroup).remove();
        reNumberPages();
        $('#pageTab li:last-child').remove();
        $('#pageTab a:first').tab('show');
    });

    /**Click Tab to show its content */
    $("#pageTab").on("click", "a", function(e) {
        e.preventDefault();
        $(this).tab('show');
    });


    /*** Add a Tab for ASL ends*/


    /*** Add a Tab for amend process starts*/
    $('#btnAddPage_2').click(function() {
      pageNum_2++;
      if(pageNum_2 >= maxPageNum_2){
        alert("Maximum groups added");
      }
      else{
        $('#pageTab_2').append(
          $('<li><a href="#page'+ pageNum_2 + '_2">' +
          'Group ' + pageNum_2 +
          '<button class="close" type="button" ' +
          'title="Remove this page">X</button>' +
          '</a></li>'));

        $('#pageTabContent_2').append(
          $('<div class="tab-pane" id="page'+pageNum_2+'_2"><div class="section_title_table clearfix"><h6 class="pull-left avaliable_loan" rel="group_'+pageNum_2+'_selected_user_table_wrapper">All Users</h6><div class="table_utils asl_page"><span class="search_field_wrap pull-left"><input type="text" placeholder="User" class="form-control search_field"><span class="sprite sprite-ico_search_field"></span></span></div></div><table width="90%" align="center" cellpadding="0" cellspacing="0" class="tbl table tbl_type2 row_item_selector_step2 group'+pageNum_2+'"><thead><tr><th width="5%" class="no_rt_bdr"><div class="row_item_selected"> <span class="sprite sprite-ico_tick"></span> </div></th><th width="25%" class="no_lt_bdr"><a href="javascript:;" class="sort_column">User Name</a></th><th width="25%"><a href="javascript:;">Title</a></th><th width="35%"><a href="javascript:;">Organization</a></th><th width="10%"><a href="javascript:;">Status</a></th></tr></thead><tbody><tr rel="group_'+pageNum_2+'_row_1"><td><div class="row_item_selected"> <span class="sprite sprite-ico_tick"></span> </div></td><td>Michael Augustin '+pageNum_2+'</td><td>Division Chief</td><td>Cross River State PFMU</td><td>Active</td></tr><tr rel="group_'+pageNum_2+'_row_2"><td><div class="row_item_selected"> <span class="sprite sprite-ico_tick"></span> </div></td><td>IDS Scudder</td><td>Assistant Project Accountant</td><td>National Project Coordination Unit</td><td>Active</td></tr><tr rel="group_'+pageNum_2+'_row_3"><td><div class="row_item_selected"> <span class="sprite sprite-ico_tick"></span> </div></td><td>Nikhil Mathew</td><td>Junior Accounts Officer</td><td>CORAF/WECARD</td><td>Pending</td></tr><tr rel="group_'+pageNum_2+'_row_4"><td><div class="row_item_selected"> <span class="sprite sprite-ico_tick"></span> </div></td><td>John Peter</td><td>State Expert</td><td>Cross River State PFMU</td><td>Active</td></tr><tr rel="group_'+pageNum_2+'_row_5"><td><div class="row_item_selected"> <span class="sprite sprite-ico_tick"></span> </div></td><td>Julia Harpings</td><td>Secretary General</td><td>CORAF/WECARD</td><td>Active</td></tr><tr rel="group_'+pageNum_2+'_row_6"><td><div class="row_item_selected"> <span class="sprite sprite-ico_tick"></span> </div></td><td>Michael Augustin</td><td>Project Coordinator</td><td>National Project Coordination Unit</td><td>Pending</td></tr><tr rel="group_'+pageNum_2+'_row_7"><td><div class="row_item_selected"> <span class="sprite sprite-ico_tick"></span> </div></td><td>IDS Scudder</td><td>Assistant Project Accountant</td><td>National Project Coordination Unit</td><td>Pending</td></tr></tbody></table><div class="group_'+pageNum_2+'_selected_user_table_wrapper selected_user_table hide"><table width="90%" align="center" cellpadding="0" cellspacing="0" class="tbl table tbl_type2 group'+pageNum_2+'"><thead><tr><th width="5%" class="no_rt_bdr"></th><th width="25%" class="no_lt_bdr"><a href="javascript:;" class="sort_column">User Name</a></th><th width="25%"><a href="javascript:;">Title</a></th><th width="35%"><a href="javascript:;">Organization</a></th><th width="10%"><a href="javascript:;">Mandatory?</a></th></tr></thead><tbody></tbody></table></div><div class="section_title_table"><h6 class="avaliable_loan">Selected Users</h6></div><div class="group_'+pageNum_2+'_selected_user_table_wrapper selected_user_table"><table width="90%" align="center" cellpadding="0" cellspacing="0" class="tbl table tbl_type2 group'+pageNum_2+'" rel="group'+pageNum_2+'"><thead><tr><th width="1%" class="no_rt_bdr"></th><th width="20%" class="no_lt_bdr"><a href="javascript:;" class="sort_column">User Name</a></th><th width="25%"><a href="javascript:;">Title</a></th><th width="25%"><a href="javascript:;">Organization</a></th><th width="10%"><a href="javascript:;">Status</a></th><th width="10%"><a href="javascript:;">Mandatory?</a></th><th width="7%"><span class="sprite sprite-ico_delete_bin delete_loannumber_step2_delete_all"></span></th></tr></thead><tbody></tbody></table><div class="required_esgin_wrap clearfix"><div class="table_utils"><label class="normal_txt">Required eSignatories</label><select class="form-control input-sm"><option>1</option><option>2</option><option>3</option><option>4</option></select></div></div></div></div>'));
        

          $('#page'+pageNum_2).tab('show');
        }
    });

    /*** Remove a Tab*/
    $('#pageTab_2').on('click', ' li a .close', function() {
        var tabId_2 = $(this).parents('li').children('a').attr('href');
        delGroup_DA = tabId_2;
        $('.deleteGroup_DA-modal-sm').modal();
      
    });

    $(document).on('click','.deleteGroup_Action_DAlevel', function(){
        $(delGroup_DA).remove();
        reNumberPages();
        $('#pageTab_2 li:last-child').remove();
        $('#pageTab_2 a:first').tab('show');
    });

    /**Click Tab to show its content */
    $("#pageTab_2").on("click", "a", function(e) {
      e.preventDefault();
      $(this).tab('show');
    });



    /*** Add a Tab for amend process ends*/


    $(document).on('click', '.delete_loannumber_step2_delete_all', function(){
        $(this).parents('.tab-pane').find('table.'+$(this).parents('table').attr('rel')).find('tr').removeClass('selected_row');
        $(this).parents('.tab-pane').find('table.'+$(this).parents('table').attr('rel')).next().find('.select_all_current_group_user').text('Select All');
        $(this).parents('table').find('tbody').empty();
        $(this).parents('.table').next('.required_esgin_wrap').hide();
    });
	
	 $(document).on('click', '.delete_loannumber_step1_delete_all', function(){
        $(this).parents('#select-loan-container').find('table.'+$(this).parents('table').attr('rel')).find('tr').removeClass('selected_row');
        $(this).parents('#select-loan-container').find('table.'+$(this).parents('table').attr('rel')).next().find('.select_all_current_group_user').text('Select All');
        $(this).parents('table').find('tbody').empty();
        $(this).parents('.table').next('.required_esgin_wrap').hide();
    });

    $(document).on('click', '.row_item_selector_step2 thead tr .row_item_selected', function(){
        $(this).parents('tr').toggleClass('selected_row');
        $(this).parents('thead').next().find('tr').trigger('click');
    });


    $(document).on('click', '.row_item_selector_step2 tbody tr', function(){


        
        var rel_name_user = $(this).attr('rel');


        $(this).toggleClass('selected_row');
        var selected_items_counter = $(this).parents('.tab-pane').find('.selected_row').length;

        if($(this).hasClass('selected_row')){
            if(selected_items_counter == 1){
                $(this).parents('.tab-pane').find('.selected_user_wrap').removeClass('hide');
                $(this).parents('.tab-pane').find('.selected_user_wrap').children('a').html("Selected ("+ selected_items_counter +")");
                $(this).parents('.tab-pane').find('.selected_user_table').find('tbody').append('<tr class="'+rel_name_user+'">'+ $(this).html() + '<td><span class="ico-checkbox_switch">Yes</span></td><td><span class="sprite sprite-ico_delete_bin delete_loannumber_step2"></span></td>' +'</tr>');
                $(this).parents('.tab-pane').find('.selected_user_table').find('.required_esgin_wrap').show();
                
            }
            else if(selected_items_counter == 0){
                $(this).parents('.tab-pane').find('.selected_user_wrap').addClass('hide');
                $(this).parents('.tab-pane').find('.selected_user_table').find('tbody').empty();                
            }
            else {
                $(this).parents('.tab-pane').find('.selected_user_wrap').children('a').html("Selected ("+ selected_items_counter +")");
                $(this).parents('.tab-pane').find('.selected_user_table').find('tbody').append('<tr class="'+rel_name_user+'">'+$(this).html() + '<td><span class="ico-checkbox_switch">Yes</span></td><td><span class="sprite sprite-ico_delete_bin delete_loannumber_step2"></span></td>' +'</tr>');
            }
        }
        else{
            $('.'+rel_name_user).remove();
            $(this).parents('.tab-pane').find('.selected_user_wrap').children('a').html("Selected ("+ selected_items_counter +")");

            
            if(selected_items_counter == 0){
                $(this).parents('.tab-pane').find('.selected_user_wrap').addClass('hide');
                $(this).parents('.tab-pane').find('.selected_user_table').find('tbody').empty();
                $(this).parents('.tab-pane').find('.selected_user_table').find('.required_esgin_wrap').hide();
            }
            else if(selected_items_counter == 1){
                $(this).parents('.tab-pane').find('.selected_user_wrap').removeClass('hide');
                $(this).parents('.tab-pane').find('.selected_user_wrap').children('a').html("Selected ("+ selected_items_counter +")");
            }
        }
    });

    $(document).on('click', '.selected_user_wrap', function(){
        var selected_user_table_toShow = $(this).attr('rel');
        $('.'+selected_user_table_toShow).removeClass('hide');
        $(this).parents('.tab-pane').children('table').addClass('hide');
        $(this).children('a').addClass('blk_link');
        $(this).prev().addClass('active');
        $(this).parents('.tab-pane').children('.required_esgin_wrap').addClass('hide');
    });

    $(document).on('click', '.avaliable_txt', function(){
        var selected_user_table_toShow = $(this).attr('rel');
        $('.'+selected_user_table_toShow).addClass('hide');
        $(this).parents('.tab-pane').children('table').removeClass('hide');
        $(this).next().children('a').removeClass('blk_link');
        $(this).removeClass('active');
        $(this).parents('.tab-pane').children('.required_esgin_wrap').removeClass('hide');
    });


    $(document).on('click','.css-labelChk', function(){
        $(this).parents('tr').addClass('selected_row');
    });



    $(document).on('click','.select_all_current_group_user', function(){
        var change_text = $(this).text();

        if(change_text == "Select All"){

            $(this).parents('.tab-pane').find('.row_item_selector_step2').find('tbody').find('tr').each(function(){
                $(this).addClass('selected_row');
                var rel_name_user = $(this).attr('rel');
                $(this).parents('.tab-pane').find('.selected_user_table').find('tbody').append('<tr class="'+rel_name_user+'">'+$(this).html()+'<td><span class="ico-checkbox_switch">Yes</span></td><td><span class="sprite sprite-ico_delete_bin delete_loannumber_step2"></span></td></tr>');
            });
            var selected_items_counter = $(this).parents('.tab-pane').find('.selected_row').length;
            $(this).parents('.tab-pane').find('.selected_user_wrap').removeClass('hide');
            $(this).parents('.tab-pane').find('.selected_user_wrap').children('a').html("Selected ("+ selected_items_counter +")");
            $(this).text('Deselect All');


        }
        
        else if(change_text == "Deselect All"){
            $(this).parents('.tab-pane').find('.row_item_selector_step2').find('tr').trigger('click');
            $(this).text('Select All');
        }


    });


    $(document).on('click','#submit_to_auth_rep', function(){
        $('.upload_doc_link').css('display','block');        
    });
    $(document).on('click','#signed_copy', function(){
        $('.upload_doc_link').hide();
        $('.upload_doc_list_wrap').hide();        
    });

    $(document).on('click','.upload_doc_link', function(){
        $(this).next('.upload_doc').trigger('click');
    });

    $(document).on('change','.upload_doc', function(){
        $('.upload_doc_list_wrap').show();
    });
    /*create asl ends here*/


    /*general selectable row items starts*/

    $(document).on('click','.selectable_table tbody tr', function(){

        var curruent_selected_row = $(this).attr('rel');
        $(this).toggleClass('selected_row');

        //var selected_row_items_counter = $(this).parents('.selectable_table_wrapper').find('.selected_row').length;
        //var columnCount = $(this).parents('.selectable_table_wrapper').find('thead:first th').length;


        var columnCount = $(this).parents('.selectable_table_wrapper').find('.selectable_table').find('thead:first th').length -1;
        
        var selected_row_items_counter = $(this).parents('.selectable_table_wrapper').find('tr.selected_row').find('td:nth-child('+columnCount+')').length;        

        var total_no_of_row_in_current_table = $(this).parents('.selectable_table_wrapper').find('.selectable_table').find('tr').find('td:nth-child('+columnCount+')').length;

        var row_span_count = $(this).parents('.selectable_table_wrapper').find('[rel="'+curruent_selected_row+'"]').length;

        

        if($(this).hasClass('selected_row')){
            $(this).parents('.selectable_table_wrapper').find('[rel="'+curruent_selected_row+'"]').each(function(){
                $(this).addClass('selected_row');
                $(this).parents('.selectable_table_wrapper').find('.selected_count').removeClass('hide');
                $(this).parents('.selectable_table_wrapper').find('.selected_row_table').find('tbody').append('<tr class="'+curruent_selected_row+'">'+$(this).html()+'</tr>');
            });
            $(this).parents('.selectable_table_wrapper').find('.selected_count').children('a').html("Selected ("+ selected_row_items_counter +")");
            
        }
        else{
            $(this).parents('.selectable_table_wrapper').find('[rel="'+curruent_selected_row+'"]').each(function(){
                $(this).removeClass('selected_row');
                $('.'+curruent_selected_row).remove();
                $(this).parents('.selectable_table_wrapper').find('.selected_count').children('a').html("Selected ("+ selected_row_items_counter +")");

                if(selected_row_items_counter == 0){
                    $(this).parents('.selectable_table_wrapper').find('.selected_count').addClass('hide');
                    $(this).parents('.selectable_table_wrapper').find('.selected_row_table').find('tbody').empty();
                }
            });
        }

        if(total_no_of_row_in_current_table == selected_row_items_counter){            
            $(this).parents('.selectable_table_wrapper').find('.select_all_above_rows').text('Deselect All');
        }


    });
    

    $(document).on('click','.total_selected_item', function() {
        
        $(this).parents('.selectable_table_wrapper').find('.selectable_table').hide();
        $(this).parents('.selectable_table_wrapper').find('.selected_row_table').removeClass('hide');
        $(this).parents('.selectable_table_wrapper').find('.selectPanel_wrap').hide();
        $(this).parents('.selectable_table_wrapper').find('.all_records').addClass('active');
        $(this).addClass('blk_link');
    });
    $(document).on('click','.all_records.active', function() {
        $(this).parents('.selectable_table_wrapper').find('.selectable_table').show();
        $(this).parents('.selectable_table_wrapper').find('.selected_row_table').addClass('hide');
        $(this).parents('.selectable_table_wrapper').find('.selectPanel_wrap').show();
        $(this).parents('.selectable_table_wrapper').find('.all_records').removeClass('active');
        $(this).next().find('.total_selected_item').removeClass('blk_link');

    });


    $(document).on('click','.select_all_above_rows', function(){
        var change_text = $(this).text();
        var selected_row_items_counter;
        var columnCount =$(this).parents('.selectable_table_wrapper').find('.selectable_table').find('thead:first th').length -1;
        

        console.log(columnCount)

        if(change_text == "Select All"){

            
            $(this).parents('.selectable_table_wrapper').find('.selectable_table').find('tbody').find('tr').each(function(){
                $(this).addClass('selected_row');
                selected_row_items_counter = $(this).parents('.selectable_table_wrapper').find('tr.selected_row').find('td:nth-child('+columnCount+')').length;
                var curruent_selected_row = $(this).attr('rel');
                $(this).parents('.selectable_table_wrapper').find('.selected_row_table').find('tbody').append('<tr class="'+curruent_selected_row+'">'+$(this).html()+'</tr>');
            });
            
            $(this).parents('.selectable_table_wrapper').find('.selected_count').removeClass('hide');
            $(this).parents('.selectable_table_wrapper').find('.selected_count').children('a').html("Selected ("+ selected_row_items_counter +")");
            $(this).text('Deselect All');


        }
        
        else if(change_text == "Deselect All"){
            $(this).parents('.selectable_table_wrapper').find('.selectable_table').find('tr').trigger('click');
            $(this).text('Select All');
        }


    });

    /*general selectable row items ends*/


    /*add user scripts starts user_borrowRecord  user_project  user_loan*/
    $(document).on('click','.login_details_user .check_wrap .css-labelChk', function(){

        var login_details_user = $(this).attr('rel');
        var checkBox_user_auth = $(this).parent().find(":checkbox");

        if(checkBox_user_auth.is(":checked")){
            $('.'+login_details_user).hide();            
        }
        else{
            $('.'+login_details_user).show();
        }
    });

    /*add user scripts ends*/

    /*country selectors*/
    $('.search_selector, .country_selector').select2({
        width: "100%"
    });
    /*country selectors*/

    /*header utility functions starts*/

    $('.header_utility').click(function(){
        $('.popover_wrap').hide();
        $(this).parent().next('.popover_wrap').show();
    });

    $(document).click(function() { 
        $('.popover_wrap').hide();
    }); 
    
    $('.header_utility, .popover_wrap').click(function(event){
       event.stopPropagation();
    });

    /*header utility functions ends*/

    $(document).on('click', '.reviewpage_header', function(){
        var editable_step = $(this).attr("data-rel");
        window.location.href = "create_asl.html#"+editable_step;
    });

    $(document).on('click', '.reviewpage_header_org_setup', function(){
        var editable_step = $(this).attr("data-rel");
        window.location.href = "organization_setup.html#"+editable_step;
    });

    $(document).on('click', '.reviewpage_header_user', function(){
        window.location.href = "user_add.html";
    });



    $('.normal_selector').select2({
        minimumResultsForSearch: Infinity,
        width: "100%"
    });

    $(document).on('click', '.date_trigger', function(){
        $(this).prev('.daily_date').focus();
    });

	$(document).on('click', '.reviewpage_header_inv_setup', function(){
        var editable_step = $(this).attr("data-rel");
        window.location.href = "investment_guarantee_setup.html#"+editable_step;
    });


    /*TRE Scripts starts*/

    /*custom carousel simple script starts -- big -- starts*/
    var carousel_html_width = 0;
    var carousel_scrollnum = 0;
    var carousel_item_width = 0;
    var carousel_item_width = parseInt($('.carousel_wrap').css('width'), 10);
    
    
    $('.carousel_wrap .carousel_column').each(function(){
        carousel_html_width = carousel_html_width + parseInt($(this).css('width'), 10);
    });


    carousel_scrollnum = carousel_item_width;

    $('.carousel_wrapper_mask .nav_left_carousel span').addClass('sprite-ico_prev_disabled');

    $('.carousel_wrapper_mask .nav_right_carousel').click(function(){

        $('.carousel_wrap').animate( { scrollLeft: '+=500' }, 500);
        $('.carousel_wrapper_mask .nav_left_carousel span').removeClass('sprite-ico_prev_disabled');
        carousel_scrollnum = carousel_scrollnum + 300;
        if(carousel_scrollnum >= carousel_html_width){
            $('.carousel_wrapper_mask .nav_right_carousel span').addClass('sprite-ico_next_disabled');
        }
    });

    $('.carousel_wrapper_mask .nav_left_carousel').click(function(){
        $('.carousel_wrap').animate( { scrollLeft: '-=500' }, 500);
        carousel_scrollnum = carousel_scrollnum - 300;
        if(carousel_scrollnum <= carousel_item_width){
            $('.carousel_wrapper_mask .nav_left_carousel span').addClass('sprite-ico_prev_disabled');
        }
        $('.carousel_wrapper_mask .nav_right_carousel span').removeClass('sprite-ico_next_disabled');
    });

    /*custom carousel simple script starts -- big -- ends*/


    /*custom carousel simple script starts -- small -- starts*/


    var mini_carousel_html_width = 0;
    var mini_carousel_scrollnum = 0;
    var mini_carousel_item_width = 0;
    var mini_carousel_item_width = parseInt($('.mini_carousel_wrap').css('width'), 10);
    var mini_carousel_item_width_new =mini_carousel_item_width+3;
    
    $('.mini_carousel_wrap .mini_cal_wrap').each(function(){
        mini_carousel_html_width = mini_carousel_html_width + parseInt($(this).css('width'), 10);
    });

    mini_carousel_scrollnum = mini_carousel_item_width;

    $('.mini_carousel_mask .mini_nav_right_carousel').click(function(){

        $(this).prev('.mini_carousel_wrap').animate( { scrollLeft: '+='+mini_carousel_item_width_new }, 500);
        mini_carousel_scrollnum = mini_carousel_scrollnum + 200;
    });

    $('.mini_carousel_mask .mini_nav_left_carousel').click(function(){

        $(this).next('.mini_carousel_wrap').animate( { scrollLeft: '-='+mini_carousel_item_width_new }, 500);
        mini_carousel_scrollnum = mini_carousel_scrollnum - 200;
    });
    

    
    //mini_nav_right_carousel

    /*custom carousel simple script starts -- small -- ends*/

    /*TRE Scripts ends*/
	
	 $(document).on('click','.add-equity',function() {
        //alert('link loan');
        $('.eq-container').append('<div class="form-group"> <div class="col-xs-6"> <div class="col-xs-3 no_left_pad"> <select class="form-control" name=""> <option>Select </option> <option>Equity </option> </select> </div><div class="col-xs-3 no_left_pad"> <input type="text" class="form-control" placeholder=""/> </div><div class="col-xs-6 no_left_pad"> <select class="form-control" name=""> <option>Select currency </option> <option>United States Dollar | USD</option> <option>Euro | EUR</option> <option>Pound | GBP</option> <option>Japanese Yen | JPY</option> <option>Swiss Franc | CHF</option> </select> </div><p class="row_deletor row_deletor_pos" style="cursor:pointer;"><span rel="country_del" class="sprite sprite-ico_delete_bin eq_row_deletor"></span></p></div></div>');
		});
    	 $(document).on('click','.eq_row_deletor',function() {
        	$(this).parent().parent().parent().remove();
		});
	var cnt = 2;
	 $(document).on('click','.add-investor-Contact',function() {
        //alert('link loan');
        $('.investor-container').append('<div class="investor-group" style="position: relative;"><hr style="width:100% !important;margin:0px !important; padding-bottom:10px;"><h5 class="left_margin_neg_3">Investor Contact '+ cnt +'</h5><div class="form-group"> <label for="inputFirstName1" class="control-label required col-xs-12">Name</label> <p class="row_deletor pull-right" style="position: absolute;right: 0px;top: 15px; cursor:pointer;"><span rel="country_del" class="sprite sprite-ico_delete_bin inv_row_deletor"></span></p><div class="col-xs-6"> <div class="col-xs-3 no_left_pad"> <select class="form-control" name=""> <option>Title</option> <option>Mr</option> <option>Ms</option> <option>Dr</option> <option>Sr</option> <option>Jr</option> </select> </div></div></div><div class="form-group"> <label for="" class="control-label required col-xs-12">First Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="" placeholder="First Name"> </div><div class="col-xs-1 no_padding"> <span class="info_wrapper"> <a class="info_links" tabindex="-1" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div><div class="form-group"> <label for="" class="control-label col-xs-12">Middle Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="" placeholder="Middle Name"> </div><div class="col-xs-1 no_padding"></div></div><div class="form-group"> <label for="" class="control-label required col-xs-12">Last Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="" placeholder="Last Name"> </div><div class="col-xs-1 no_padding"></div></div><div class="form-group"> <label for="" class="control-label required col-xs-12">Job Title</label> <div class="col-xs-6"> <input type="text" class="form-control" id="" placeholder="Job Title"> </div><div class="col-xs-1 no_padding"> <span class="info_wrapper"> <a class="info_links" tabindex="-1" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div><div class="form-group"> <label for="" class="control-label required col-xs-12">Telephone Number</label> <div class="col-xs-6"> <div class="col-xs-3 no_left_pad"> <input type="text" class="form-control" id="" placeholder="Country Code"> </div><div class="col-xs-3 no_left_pad"> <input type="text" class="form-control" id="" placeholder="City Code"> </div><div class="col-xs-6 no_left_pad"> <input type="text" class="form-control" id="" placeholder="Telephone Number"> </div></div><div class="col-xs-1 no_padding"><span class="info_wrapper"> <a class="info_links" tabindex="-1" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div><div class="form-group"> <label for="" class="control-label required col-xs-12">Email Address</label> <div class="col-xs-6"> <input type="email" class="form-control" id="" placeholder="Email Address"> </div><div class="no_padding"> <span class="info_wrapper"> <a class="info_links" tabindex="-1" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div></div>');
		cnt = cnt+1;
		});
    	$(document).on('click','.row_deletor',function() {
        cnt = cnt-1;
		});	
    	 $(document).on('click','.inv_row_deletor',function() {
        $(this).parent().parent().parent().remove();
		});	
		
		$(document).on('click','.auth_int',function() {

        var checkBox_new = $(this).parent().find(":checkbox");
        var selected_auth_type = $(this).attr('rel');

        //alert(selected_auth_type)

        
        if(checkBox_new.is(":checked")){
            if(selected_auth_type == "auth_rep"){
                $('.auth_rep').hide();
				$('.auth_rep').children().remove();
            }
            else if(selected_auth_type == "auth_broker"){
                $('.auth_broker').hide();
				$('.auth_broker').children().remove(); 
            }
            else if(selected_auth_type == "auth_agent"){
                $('.auth_agent').hide();
				$('.auth_agent').children().remove();
            }
            else if(selected_auth_type == "auth_finder"){
                $('.auth_finder').hide();
				$('.auth_finder').children().remove();
            }
            else if(selected_auth_type == "auth_staff"){
                $('.auth_staff').hide();
				$('.auth_staff').children().remove();
            }
            else if(selected_auth_type == "chk_miga_stf"){
                $('.miga_stf').hide();
            }
            else if(selected_auth_type == "chk_wbg_stf"){
                $('.wbg_stf').hide();
            }
			else if(selected_auth_type == "chk_ifc_stf"){
                $('.ifc_stf').hide();
            }
			else if(selected_auth_type == "chk_agent"){
                $('.agent_stf').hide();
            }	
			else if(selected_auth_type == "chk_ins_broker"){
                $('.broker_stf').hide();
            }					
        }
        else{
            
            if(selected_auth_type == "auth_rep"){                
                $('.auth_rep').show();
				$('.auth_rep').append('<div class="form-group"> <label for="inputFirstName1" class="control-label required col-xs-12">Name</label> <div class="col-xs-6"> <div class="col-xs-3 no_left_pad"> <select class="form-control" name=""> <option>Title</option> <option>Mr</option> <option>Ms</option> <option>Dr</option> <option>Sr</option> <option>Jr</option> </select> </div></div></div><div class="form-group"> <label for="inputFName1" class="control-label required col-xs-12">First Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputFName1" placeholder="First Name"> </div><div class="col-xs-1 no_padding"> <span class="info_wrapper"> <a class="info_links" tabindex="-1" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div><div class="form-group"> <label for="inputMName1" class="control-label col-xs-12">Middle Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputMName1" placeholder="Middle Name"> </div><div class="col-xs-1 no_padding"></div></div><div class="form-group"> <label for="inputLName1" class="control-label required col-xs-12">Last Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputLName1" placeholder="Last Name"> </div><div class="col-xs-1 no_padding"></div></div><div class="form-group"> <label for="inputjob" class="control-label required col-xs-12">Job Title</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputjob" placeholder="Job Title"> </div><div class="col-xs-1 no_padding"></div></div><div class="form-group"> <label for="inputTele1" class="control-label required col-xs-12">Telephone Number</label> <div class="col-xs-6"> <div class="col-xs-3 no_left_pad"> <input type="text" class="form-control" id="inputTele1" placeholder="Country Code"> </div><div class="col-xs-3 no_left_pad"> <input type="text" class="form-control" id="inputTeleCity1" placeholder="City Code"> </div><div class="col-xs-6 no_left_pad"> <input type="text" class="form-control" id="inputTeleNumber1" placeholder="Telephone Number"> </div></div><div class="col-xs-1 no_padding"><span class="info_wrapper"> <a class="info_links" tabindex="-1" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div><div class="form-group"> <label for="inputEmail1" class="control-label required col-xs-12">Email Address</label> <div class="col-xs-6"> <input type="email" class="form-control" id="inputEmail1" placeholder="Email Address"> </div><div class="no_padding"></div></div>');
				
            }
            else if(selected_auth_type == "auth_broker"){
                $('.auth_broker').show();
				$('.auth_broker').append('<div class="form-group"> <label for="inputFirstName1" class="control-label required col-xs-12">Name</label> <div class="col-xs-6"> <div class="col-xs-3 no_left_pad"> <select class="form-control" name=""> <option>Title</option> <option>Mr</option> <option>Ms</option> <option>Dr</option> <option>Sr</option> <option>Jr</option> </select> </div></div></div><div class="form-group"> <label for="inputFName1" class="control-label required col-xs-12">First Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputFName1" placeholder="First Name"> </div><div class="col-xs-1 no_padding"> <span class="info_wrapper"> <a class="info_links" tabindex="-1" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div><div class="form-group"> <label for="inputMName1" class="control-label col-xs-12">Middle Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputMName1" placeholder="Middle Name"> </div><div class="col-xs-1 no_padding"></div></div><div class="form-group"> <label for="inputLName1" class="control-label required col-xs-12">Last Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputLName1" placeholder="Last Name"> </div><div class="col-xs-1 no_padding"></div></div><div class="form-group"> <label for="inputjob" class="control-label required col-xs-12">Job Title</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputjob" placeholder="Job Title"> </div><div class="col-xs-1 no_padding"></div></div><div class="form-group"> <label for="inputTele1" class="control-label required col-xs-12">Telephone Number</label> <div class="col-xs-6"> <div class="col-xs-3 no_left_pad"> <input type="text" class="form-control" id="inputTele1" placeholder="Country Code"> </div><div class="col-xs-3 no_left_pad"> <input type="text" class="form-control" id="inputTeleCity1" placeholder="City Code"> </div><div class="col-xs-6 no_left_pad"> <input type="text" class="form-control" id="inputTeleNumber1" placeholder="Telephone Number"> </div></div><div class="col-xs-1 no_padding"><span class="info_wrapper"> <a class="info_links" tabindex="-1" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div><div class="form-group"> <label for="inputEmail1" class="control-label required col-xs-12">Email Address</label> <div class="col-xs-6"> <input type="email" class="form-control" id="inputEmail1" placeholder="Email Address"> </div><div class="no_padding"></div></div>');  
            }
            else if(selected_auth_type == "auth_agent"){
                $('.auth_agent').show();
				$('.auth_agent').append('<div class="check_wrap chk_wraper_fleft clearfix auth_inter"><input type=checkbox id="chk_miga_agent"><label class="css-labelChk sprite sprite-ico-checkbox chk_miga_agent pull-left" for="chk_miga_agent" rel=chk_miga_agent></label><span for="chk_miga_agent" class="mutli_line_chkbox">I understand that such agent will be paid an ongoing commission by MIGA. The authorized agent shall act as agent for MIGA throughout the under writing process prior to entering into the contract of guarantee. The undersigned will recognize the authorized agent as agent for MIGA until such time as the undersigned receives a notice in writing from MIGA stating that such agency relationship has been terminated. MIGA will pay an agency commission to the authorized agent calculated as a fixed percentage of each premium amount paid to MIGA for as long as the agency relationship with the authorized agent has not been terminated by MIGA.</span></div><div class="clear"></div><div class="form-group"> <label for="inputFirstName1" class="control-label required col-xs-12">Name</label> <div class="col-xs-6"> <div class="col-xs-3 no_left_pad"> <select class="form-control" name=""> <option>Title</option> <option>Mr</option> <option>Ms</option> <option>Dr</option> <option>Sr</option> <option>Jr</option> </select> </div></div></div><div class="form-group"> <label for="inputFName1" class="control-label required col-xs-12">First Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputFName1" placeholder="First Name"> </div><div class="col-xs-1 no_padding"> <span class="info_wrapper"> <a class="info_links" tabindex="-1" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div><div class="form-group"> <label for="inputMName1" class="control-label  col-xs-12">Middle Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputMName1" placeholder="Middle Name"> </div><div class="col-xs-1 no_padding"></div></div><div class="form-group"> <label for="inputLName1" class="control-label required col-xs-12">Last Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputLName1" placeholder="Last Name"> </div><div class="col-xs-1 no_padding"></div></div><div class="form-group"> <label for="inputjob" class="control-label required col-xs-12">Job Title</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputjob" placeholder="Job Title"> </div><div class="col-xs-1 no_padding"></div></div><div class="form-group"> <label for="inputTele1" class="control-label required col-xs-12">Telephone Number</label> <div class="col-xs-6"> <div class="col-xs-3 no_left_pad"> <input type="text" class="form-control" id="inputTele1" placeholder="Country Code"> </div><div class="col-xs-3 no_left_pad"> <input type="text" class="form-control" id="inputTeleCity1" placeholder="City Code"> </div><div class="col-xs-6 no_left_pad"> <input type="text" class="form-control" id="inputTeleNumber1" placeholder="Telephone Number"> </div></div><div class="col-xs-1 no_padding"><span class="info_wrapper"> <a class="info_links" tabindex="-1" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div><div class="form-group"> <label for="inputEmail1" class="control-label required col-xs-12">Email Address</label> <div class="col-xs-6"> <input type="email" class="form-control" id="inputEmail1" placeholder="Email Address"> </div><div class="no_padding"></div></div>');
            }
            else if(selected_auth_type == "auth_finder"){
                $('.auth_finder').show();
				$('.auth_finder').append('<div class="check_wrap chk_wraper_fleft clear auth_inter"><input type=checkbox id="chk_miga_finder"><label class="css-labelChk sprite sprite-ico-checkbox chk_miga_finder" for=chk_miga_finder rel=chk_miga_finder>I understand that such individual/company will be paid a commission by MIGA.</label></div><div class="form-group"> <label for="inputFirstName1" class="control-label required col-xs-12">Name</label> <div class="col-xs-6"> <div class="col-xs-3 no_left_pad"> <select class="form-control" name=""> <option>Title</option> <option>Mr</option> <option>Ms</option> <option>Dr</option> <option>Sr</option> <option>Jr</option> </select> </div></div></div><div class="form-group"> <label for="inputFName1" class="control-label required col-xs-12">First Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputFName1" placeholder="First Name"> </div><div class="col-xs-1 no_padding"> <span class="info_wrapper"> <a class="info_links" tabindex="-1" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div><div class="form-group"> <label for="inputMName1" class="control-label col-xs-12">Middle Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputMName1" placeholder="Middle Name"> </div><div class="col-xs-1 no_padding"></div></div><div class="form-group"> <label for="inputLName1" class="control-label required col-xs-12">Last Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputLName1" placeholder="Last Name"> </div><div class="col-xs-1 no_padding"></div></div><div class="form-group"> <label for="inputjob" class="control-label required col-xs-12">Job Title</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputjob" placeholder="Job Title"> </div><div class="col-xs-1 no_padding"></div></div><div class="form-group"> <label for="inputTele1" class="control-label required col-xs-12">Telephone Number</label> <div class="col-xs-6"> <div class="col-xs-3 no_left_pad"> <input type="text" class="form-control" id="inputTele1" placeholder="Country Code"> </div><div class="col-xs-3 no_left_pad"> <input type="text" class="form-control" id="inputTeleCity1" placeholder="City Code"> </div><div class="col-xs-6 no_left_pad"> <input type="text" class="form-control" id="inputTeleNumber1" placeholder="Telephone Number"> </div></div><div class="col-xs-1 no_padding"><span class="info_wrapper"> <a class="info_links" tabindex="-1" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div><div class="form-group"> <label for="inputEmail1" class="control-label required col-xs-12">Email Address</label> <div class="col-xs-6"> <input type="email" class="form-control" id="inputEmail1" placeholder="Email Address"> </div><div class="no_padding"></div></div>');
            }
            else if(selected_auth_type == "auth_staff"){
                $('.auth_staff').show();
				$('.auth_staff').append('<div class="form-group"> <label for="inputFirstName1" class="control-label required col-xs-12">Name</label> <div class="col-xs-6"> <div class="col-xs-3 no_left_pad"> <select class="form-control" name=""> <option>Title</option> <option>Mr</option> <option>Ms</option> <option>Dr</option> <option>Sr</option> <option>Jr</option> </select> </div></div></div><div class="form-group"> <label for="inputFName1" class="control-label required col-xs-12">First Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputFName1" placeholder="First Name"> </div><div class="col-xs-1 no_padding"> <span class="info_wrapper"> <a class="info_links" tabindex="-1" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> <span class="sprite sprite-ico_info"></span> </a> </span> </div></div><div class="form-group"> <label for="inputMName1" class="control-label col-xs-12">Middle Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputMName1" placeholder="Middle Name"> </div><div class="col-xs-1 no_padding"></div></div><div class="form-group"> <label for="inputLName1" class="control-label required col-xs-12">Last Name</label> <div class="col-xs-6"> <input type="text" class="form-control" id="inputLName1" placeholder="Last Name"> </div><div class="col-xs-1 no_padding"></div></div>');
            }
			 else if(selected_auth_type == "chk_miga_stf"){
                $('.miga_stf').show();
            }
			 else if(selected_auth_type == "chk_wbg_stf"){
                $('.wbg_stf').show();
            }	
			else if(selected_auth_type == "chk_ifc_stf"){
                $('.ifc_stf').show();
            }
/*			else if(selected_auth_type == "chk_agent"){
                $('.agent_stf').show();
            }
			else if(selected_auth_type == "chk_ins_broker"){
                $('.broker_stf').show();
            }*/									
        }
    });	
	
	// Radio selection 
/*	$('#purpose_registration_1, #purpose_registration_2').click(function() {
   		if($(this).is(':checked'))
		{
			$('.chk_group').hide();
			$(this).parent().parent().next().toggle();
			}
	});*/


    /* tab Carousel starts */
    var html_width = 0;
    var scrollnum = 0;
    var feeds_width = 0;

    $('.tab_carousel .list-inline li').each(function(){
        html_width = html_width + parseInt($(this).css('width'), 10);
    });
    

    feeds_width = parseInt($('.tab_carousel').css('width'), 10);
    $('.tab_carousel .nav_right_carousel, .tab_carousel .nav_left_carousel').show();
        
            $('.tab_carousel .nav_right_carousel, .tab_carousel .nav_left_carousel').show();
            $('.tab_feeds .tab_carousel').css('margin','0 20px');
            $('.tab_carousel .list-inline').css('margin','0 15px');

        // scroll functionality
        scrollnum = feeds_width;
        $('.tab_carousel .nav_right_carousel').click(function(){
           $('.tab_carousel .list-inline').animate( { scrollLeft: '+=500' }, 500);
           $('.tab_carousel .sprite-car_larr').css('opacity',1);
           scrollnum = scrollnum + 450;
           if(scrollnum >= html_width)
           {
                $('.tab_carousel .sprite-car_rarr').css('opacity',0.3);
           }
        });

        $('.tab_carousel .nav_left_carousel').click(function(){
           $('.tab_carousel .list-inline').animate( { scrollLeft: '-=500' }, 500);
           scrollnum = scrollnum - 450;
           if(scrollnum <= feeds_width)
           {
            $('.tab_carousel .sprite-car_larr').css('opacity',0.3);
           }
           $('.tab_carousel .sprite-car_rarr').css('opacity',1);
        });

        /* highlight the link */
        $('.tab_carousel .list-inline li').click(function(){
            $('.tab_carousel .list-inline li').removeClass('active');
            $(this).addClass('active');

            var current_cate_to_view = $(this).attr("rel");

            $('.disbursement_wrapper > div').hide();
            $('.categor_details_header_section').hide();
            $('.disbursement_wrapper > div.'+current_cate_to_view).show();
        });
        
        /* tab Carousel ends */

        $('.cate_sum_detail_link').click(function(){
            $('.categor_details_header_section, .category_summary_wrap_details_wrap').show();
            $('.category_summary_wrap').hide();

        });


        /*sub loan carousel tabs */
        $(document).on('click','.subloan_carousel .slick-track li',function(){
            var subLoan_selected_tab = $(this).attr('rel');
            //alert(subLoan_selected_tab);

            $('.subloan_carousel .slick-track li').removeClass('active').removeClass('slick-active').removeClass('slick-current');
            $(this).addClass('active').addClass('slick-active').addClass('slick-current');

            $('.subloan_tab_contents_wrapper > div').hide();
            $('.subloan_tab_contents_wrapper > #'+subLoan_selected_tab).show();

        });
		
		// Title manipulation based on tab selected
        $('.chg_cat_sum').click(function(){
            $('#tlt_dy').html('Category Summary');
			$('.opt_shw').css('visibility', 'visible');
			$('#tlt_dy').next('span').show();
        });
        $('.chg_cat_app').click(function(){
            $('#tlt_dy').html('Transaction List');
			$('.opt_shw').css('visibility', 'hidden');
			$('#tlt_dy').next('span').show();
        });
        $('.cate_sum_detail_link').click(function(){
            $('#tlt_dy').html('Currency of Loan Commitment: USD');
			$('.opt_shw').css('visibility', 'visible');
			$('#tlt_dy').next('span').hide();
        });




        /*29_Dec_2015 application type*/
        $('#input_ApplicationType').change(function(){
            var selected_application_form_type = $(this).val();

            $('.application_form_type_wrapper').show();
            //$('.application_form_type_wrapper '+selected_application_form_type).show();
            if( selected_application_form_type == "directPayment"){
                $('.directPayment_wrapper').show();/*please remove this line and active the abv line after all the application form pages are completed*/
            }

        });

        $('.loan_info_link').click(function(){
            $('.loan_info_wrapper').slideToggle();
            if($(this).html() == "Show Loan Information"){
                $(this).html("Hide Loan Information");
            }
            else{
                $(this).html("Show Loan Information");   
            }
        });

        $('.beneficiary_details_rad_btn').click(function(){
            var beneficiary_details_rad_btn_option = "."+$(this).attr('id')+"_wrapper";
            $('.existing_benificiary_details_wrapper').hide();
            $('.new_benificiary_details_wrapper').hide();
            
            $(beneficiary_details_rad_btn_option).show();
        });

        $('#inputBeneficiaryDetail_ApplnType').change(function(){            
            $('.existing_beneficiary_details_wrapper').show();
        });

        $('.beneficiary_edit_link').click(function(){
            $('.read_only_edit_wrapper .read_only_field').hide();
            $('.read_only_edit_wrapper .edit_field').show();

            $('.available_beneficiary label').addClass('required').addClass('control-label');
            $('.available_beneficiary label.not_required').removeClass('required').removeClass('control-label');
            

            $('.beneficiary_save_wrap').show();
            $('.beneficiary_edit_wrap').hide();
            
        });

        $('.beneficiary_save_link, .beneficiary_cancel_link').click(function(){
            $('.read_only_edit_wrapper .read_only_field').show();
            $('.read_only_edit_wrapper .edit_field').hide();

            $('.available_beneficiary label').removeClass('required').removeClass('control-label');

            $('.beneficiary_save_wrap').hide();
            $('.beneficiary_edit_wrap').show();
            
        });

        /*select Category starts*/

        var items_counter_selector_category;
        
        $(document).on('click', '.row_item_selector_category tr', function(){

            var rel_name = $(this).attr('rel');


            if($(this).children("td").length > 1){

            
                $(this).toggleClass('selected_row_category');
                $(this).removeClass('selected_row');
                items_counter_selector_category = $('.row_item_selector_category .selected_row_category').length;
                
                
                if(items_counter_selector_category == 0){
                    $('.selected_category_table_wrapper').show();
                    $('.selected_category_table tbody').empty();
                }
                else{
                    $('.selected_category_table_wrapper').show();
                    $('.selected_category_table tbody').append('<tr class="'+rel_name+'">'+$(this).html()+'<td><span class="sprite sprite-ico_delete_bin delete_selected_category_row"></span></td></tr>');
                    $(this).find('input[type="checkbox"]').prop('checked', true);
                    // alert($(this).html())
                    //alert($(this).find("td:nth-child(2)").html())
                    //$('.document_categories_list tbody').append('<tr class="'+rel_name+'"><td>'+$(this).find("td:nth-child(2)").html()+'</td><td class=""><div class="doc_category_amount"><input type="text" class="form-control selected_category_amount_counter"/></div></td><td>Copies of Record</td><td><span class="sprite sprite-ico_delete_bin delete_selected_category_row"></span></td></tr>');
                    $('.document_categories_list tbody').append('<tr class="'+rel_name+'"><td><a href="javascript:;" data-target=".category_name_details_popup" data-toggle="modal">'+$(this).find("td:nth-child(2)").html()+'</a></td><td class=""><div class="doc_category_amount"><input type="text" class="form-control selected_category_amount_counter"/></div></td><td>Copies of Record</td><td><span class="sprite sprite-ico_delete_bin delete_selected_category_row_popup "></span></td></tr>');
                }
                 
                if(!$(this).hasClass('selected_row_category')){
                    $('.'+rel_name).remove();
                    $(this).find('input[type="checkbox"]').prop('checked', false);
                }
            }
        });

        
        var delete_selected_category_row_item_popup;
        var delete_selected_category_row_item_resp_table;

        $(document).on('click', '.delete_selected_category_row_popup', function(){
            $('.delete_row_item_category').modal();
            delete_selected_category_row_item_popup = $(this).parents('tr').attr('class');
            delete_selected_category_row_item_resp_table = $(this).parents('table').attr('rel');
            //alert(delete_selected_category_row_item_resp_table);
        });

        

        $(document).on('click', '.deleteRowItem_category_Action', function(){
            
            $("."+delete_selected_category_row_item_popup).remove();
            $("[rel="+delete_selected_category_row_item_popup+"]").removeClass('selected_row_category');
            
            $("[rel="+delete_selected_category_row_item_popup+"]").find('input[type="checkbox"]').prop('checked', false);
            
            // alert($(delete_selected_category_row_item_resp_table).find('tbody').find('tr').length);

            if($('.'+delete_selected_category_row_item_resp_table).find('tr').length == '1'){
                $('.selected_category_amount_total_wrap').hide();
                $('.delete_all_selected_category_row_popup').hide();
                $('.selected_category_table_wrapper').show();
                $('.selected_category_table tbody').empty();
            }


        });


        $(document).on('click', '.delete_selected_category_row', function(){
            var delete_selected_category_row_item = $(this).parents('tr').attr('class');
            //alert(delete_selected_category_row_item);
            items_counter_selector_category = $('.row_item_selector_category .selected_row_category').length;
            $("."+delete_selected_category_row_item).remove();
            $("[rel="+delete_selected_category_row_item+"]").removeClass('selected_row_category');
            
            $("[rel="+delete_selected_category_row_item+"]").find('input[type="checkbox"]').prop('checked', false);

            if(items_counter_selector_category==2){
                $('.selected_category_table_wrapper').show();
                $('.selected_category_table tbody').empty();
                $('.selected_category_amount_total_wrap').hide();
            }

        });

        /*select Category ends*/


        $('.add_selected_categories_tolist').click(function(){
            $('.selected_category_amount_total_wrap').show();
            $('.delete_all_selected_category_row_popup').css('display', 'block');
        });



        $('.prior_contracts_rad_btn').click(function(){
            if($(this).attr('id') == 'yes_prior_contracts'){
                $('.prior_contracts_list_wrapper').show();
            }
            else{
                $('.prior_contracts_list_wrapper').hide();
            }
        });

         $('.upload_file_link_type').click(function(){
            //alert($(this).attr('id'));
            if($(this).attr('id') == 'upload_file_type_true'){
                $('.upload_file_type').show();
                 $('.upload_link_type').hide();
            }
            else{
                $('.upload_link_type').show();
                $('.upload_file_type').hide();
            }
        });

        $('.row_select_rad_btn').click(function(){
            $(this).parents('table').find('tr').removeClass('selected_row_contact_item');
            $(this).parents('tr').addClass('selected_row_contact_item');
        });

        $(document).on('click', '.contacts_name__list_table tbody tr', function(){
            $('.contacts_name__list_table tbody tr').removeClass('selected_row_contact_item');
            $(this).addClass('selected_row_contact_item');
            $(this).find('input[type="radio"]').prop('checked', true);

            $("#esign_contact_name").val($(this).find("td:nth-child(3)").html());

        });

        $(document).on('click', '.bank_name__list_table tbody tr', function(){
            $('.bank_name__list_table tbody tr').removeClass('selected_row_contact_item');
            $(this).addClass('selected_row_contact_item');
            $(this).find('input[type="radio"]').prop('checked', true);            

        });

        




        /*select contracts starts*/
        
        var items_counter_selector_contract;
        
        $(document).on('click', '.row_item_selector_contract tr', function(){

            var rel_name = $(this).attr('rel');

            if($(this).children("td").length > 1){

            
                $(this).toggleClass('selected_row_contract');
                $(this).removeClass('selected_row');
                items_counter_selector_contract = $('.row_item_selector_contract .selected_row_contract').length;
                
                
                if(items_counter_selector_contract == 0){
                    $('.selected_contract_table_wrapper').show();
                    $('.selected_contract_table tbody').empty();
                }
                else{
                    $('.selected_contract_table_wrapper').show();
                    $('.selected_contract_table tbody').append('<tr class="'+rel_name+'">'+$(this).html()+'<td><span class="sprite sprite-ico_delete_bin delete_selected_contract_row"></span></td></tr>');
                    $(this).find('input[type="checkbox"]').prop('checked', true);
                    //alert($(this).html())
                    //alert($(this).find("td:nth-child(2)").html())
                    $('.prior_contracts_list tbody').append('<tr class="'+rel_name+'">'+$(this).html()+'<td><span class="sprite sprite-ico_delete_bin delete_selected_contract_row_popup"></span></td></tr>');
                }
                 
                if(!$(this).hasClass('selected_row_contract')){
                    $('.'+rel_name).remove();
                    $(this).find('input[type="checkbox"]').prop('checked', false);
                }
            }
        });


        var delete_selected_contracts_row_item_popup;
        var delete_selected_contracts_row_item_resp_table;

        $(document).on('click', '.delete_selected_contract_row_popup', function(){
            $('.delete_row_item_contracts').modal();
            delete_selected_contracts_row_item_popup = $(this).parents('tr').attr('class');
            delete_selected_contracts_row_item_resp_table = $(this).parents('table').attr('rel');
            //alert(delete_selected_contracts_row_item_resp_table);
        });

        

        $(document).on('click', '.deleteRowItem_contracts_Action', function(){
            
            $("."+delete_selected_contracts_row_item_popup).remove();
            $("[rel="+delete_selected_contracts_row_item_popup+"]").removeClass('selected_row_contract');
            
            $("[rel="+delete_selected_contracts_row_item_popup+"]").find('input[type="checkbox"]').prop('checked', false);
            
            // alert($(delete_selected_category_row_item_resp_table).find('tbody').find('tr').length);

            if($('.'+delete_selected_contracts_row_item_resp_table).find('tr').length == '1'){
                $('.selected_contract_table_wrapper').show();
                $('.selected_contract_table tbody').empty();
                $('.selected_contract_amount_total_wrap').hide();
                $('.delete_all_selected_contracts_row_popup').hide();
            }


        });

        


        $(document).on('click', '.delete_selected_contract_row', function(){
            var delete_selected_contract_row_item = $(this).parents('tr').attr('class');
            items_counter_selector_contract = $('.row_item_selector_contract .selected_row_contract').length;
            $("."+delete_selected_contract_row_item).remove();
            $("[rel="+delete_selected_contract_row_item+"]").removeClass('selected_row_contract');

            $("[rel="+delete_selected_contract_row_item+"]").find('input[type="checkbox"]').prop('checked', false);


            if(items_counter_selector_contract==1){
                $('.selected_contract_table_wrapper').show();
                $('.selected_contract_table tbody').empty();
                $('.selected_contract_amount_total_wrap').hide();                
            }

        });


        
        $('.add_selected_contracts_tolist').click(function(){
            $('.delete_all_selected_contracts_row_popup').css('display', 'block');
        });
        
        
        /*select contracts ends*/
		/* code for global popups starts */

        // $('#pending_tasks_table, #alerts_table').dataTable({ 
        //     "bLengthChange": false,
        //     "searching": false
        // });
		
		
		$(function () {
		
        $('[data-toggle="popover"]').popover();
            
            // Custom jQuery to hide popover on click of the close button
            $(document).on("click", ".popover-footer .btn" , function(){
                $(this).parents(".popover").popover('hide');
            });


		$('body').on('click', function (e) {
			$('[data-toggle="popover"]').each(function () {
				if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
					$(this).popover('hide');
				}
				});
			});
			});
			$('.pending_task_handler').popover({ 
				html : true,
				container: 'body',
				template: '<div class="popover popover_global_elem"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>',
				content: function() {
				  return $('#popover_content_pending_tasks').html();
				}
			});
            
			$('.alerts_handler').popover({ 
				html : true,
				container: 'body',
				template: '<div class="popover popover_global_elem"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>',
				content: function() {
				  return $('#popover_content_alerts').html();                  
				}
			});
			$('.date_handler').popover({ 
				html : true,
				container: 'body',
				template: '<div class="popover popover_global_elem"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>',
				content: function() {
				  return $('#popover_content_date').html();
				}
			});
			$('.faq_handler').popover({ 
				html : true,
				container: 'body',
				template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>',
				content: function() {
				  return $('#popover_content_faq').html();
				}
			});
			// Date code
			$('#sandbox-container div').datepicker({
				todayHighlight: true,
				beforeShowDay: function (date){
				  if (date.getMonth() == (new Date()).getMonth())
					switch (date.getDate()){
					  case 4:
						return {
						  tooltip: 'Example tooltip',
						  classes: 'active'
						};
				  }
				}
			});
			
			/* code for global popups ends */
			
        $('.appln_form_document_upload_link').click(function(){
            $(this).parents('.file_upload_field_wrap').find('.appln_form_document_upload').trigger('click');
        });

        var document_uploaded_counter = 0;

        $('#appln_form_documentation').change(function(){
            document_uploaded_counter++;
            $('.documentation_uploaded_wrapper').show();
            $('.documentation_uploaded_wrapper tbody').append('<tr class="document_upload_row'+document_uploaded_counter+'"><td><span>Bank Statement</span><span class="sprite sprite-ico_pdf_doc_color"></span></td><td>Copies of Record</td><td>1 MB</td><td>Micheal Jordan</td><td>16-Nov-2015</td><td><span class="draft_txt">Pending</span></td><td><a href="javascript:;"><span class="sprite sprite-ico_delete_bin delete_document_upload_link"></span></a></td></tr>');
            $('.delete_all_documents_uploaded').css('display','block');

        });



        var delete_document_uploaded_row_item_popup;
        var delete_document_uploaded_row_item_resp_table;


        $(document).on('click','.delete_document_upload_link', function(){
            $(".delete_document_uploaded_popup").modal();
            delete_document_uploaded_row_item_popup = $(this).parents('tr').attr('class');
            delete_document_uploaded_row_item_resp_table = $(this).parents('table').attr('rel');
            
            // alert(delete_document_uploaded_row_item_resp_table)

            // $(this).parents('tr').remove();

            // if($('.documentation_uploaded_list tbody tr').length == 0){
            //     $('.documentation_uploaded_wrapper').show();
            // }
        });

        
        $(document).on('click', '.deleteRowItem_doc_uploaded_Action', function(){
            $("."+delete_document_uploaded_row_item_popup).remove();


            if($('.'+delete_document_uploaded_row_item_resp_table).find('tr').length == '1'){
                $('.delete_all_documents_uploaded').hide();
            }

        });



        $('.add_intermediary_bank_editMode_link').click(function(){
            $('.add_intermediary_bank_editMode_wrapper').toggle();
        });

        $('.add_intermediary_bank_addMode_link').click(function(){
            $('.add_intermediary_bank_addMode_wrapper').toggle();
        });
        

        $('#category_summary_table .css-labelChk, #contract_list_table .css-labelChk').click(function(e){
            e.preventDefault();
        });
		
		// Navigates to the detail page
		$('.doc_download_date_wise > span, .doc_download_date_wise > span + span').css( 'cursor', 'pointer' );
        $('.doc_download_date_wise > span, .doc_download_date_wise > span + span').click(function(){
           window.location = 'tre_portfolio_details.html';
        });

        // /*daily and periodical reprt tabs*/
        // $('.periodical_reports_link').click(function(){
        //     $(this).next().trigger('click');
        // });
        
        $('.contribution_summary_rad_btn').click(function(){
            var contribution_type = '.'+$(this).attr('id')+'_wrapper';
            
            $('.contribution_summary_wrapper > div').hide();
            $('.contribution_summary_wrapper > div'+contribution_type).show();

        });


        /*21 Jan 2016 User profile*/

        $('.myprofile_edit_link').click(function(){

            $(this).parents('.panel-default').find('.read_only_edit_wrapper .read_only_field').hide();
            $(this).parents('.panel-default').find('.read_only_edit_wrapper .edit_field').show();

            $(this).parents('.panel-default').find('label').addClass('required').addClass('control-label');
            $(this).parents('.panel-default').find('label.not_required').removeClass('required').removeClass('control-label');

            $(this).parents('.panel-default').find('.myprofile_save_wrapper').show();
            $(this).parents('.panel-default').find('.myprofile_content_edit_wrapper').hide();            
            
        });

        $('.myprofile_save_link, .myprofile_cancel_link').click(function(){
            $(this).parents('.panel').find('.myprofile_save_wrapper').hide();
            $(this).parents('.panel').find('.myprofile_content_edit_wrapper').show();
            $(this).parents('.panel').find('.read_only_edit_wrapper .read_only_field').show();
            $(this).parents('.panel').find('.read_only_edit_wrapper .edit_field').hide();
            
        });

        $(document).on('change','input[name="preferred_country"]', function(){
            if ($("#specific_country").is(":checked")) {
                $('.specific_country_wrapper').show();
            }
            else {
                $('.specific_country_wrapper').hide();
            }
        });

        $(document).on('click','#profile_subscrip', function(){
            $('.profile_subscrip_wrap').toggle();

        });
        
        $(document).on('click','.profile_pw_change_link', function(){
            $('.pw_edit_wrap').show();
            $('.pw_change_wrap').hide();

        });

        $(document).on('click','.save_profile_password, .cancel_profile_password', function(){
            $('.pw_edit_wrap').hide();
            $('.pw_change_wrap').show();
        });

        $(document).on('change', '#recent_activities', function(){
            if($(this).val() == "date_range"){
                $('.dd_date_range .recent_date_range_wrap').show();
            }
        });

        $(document).on('change', '#aff_country', function(){
            if($(this).is(":checked")){
                $('.orgAffCountry').show();
            }
            else{
                $('.orgAffCountry').hide();   
            }
        });

        $(document).on('click','.saveOrg', function(){
            $('.org_id_number').show();
        });
		// TEMP CODE FOR THEME STARTS HERE 
		$(document).on('click','.thm-def', function(){
            $('body').removeAttr('class');
        });	
		
	    $(document).on('click','.thm-blue', function(){
            $('body').removeAttr('class');
            $('body').attr('class','theme-blue');
        });	
		$(document).on('click','.thm-Purple', function(){
            $('body').removeAttr('class');
            $('body').attr('class','theme-Purple');
        });	
		// TEMP CODE FOR THEME ENDS HERE 


        /*user role details starts*/
        var first_user_role_type = true;

        var global_role_type_counter = 1;

        $(document).on('change', '.user_role_type', function(){
            if(first_user_role_type == true){
                first_user_role_type = false;
                fn_generate_role_restrict($(this));
            }
            else{
                //do nothing
            }
            
        });

        function fn_generate_role_restrict(role_type_generate){
            
            $(role_type_generate.parents('.form-group').next()).append('<div class="form-group clearfix"><label class="control-label required" for="inputUserRole_startDate_'+global_role_type_counter+'">Effective Dates</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><div class="col-xs-6 no_left_pad"><div class="date_component"><input type="text" class="form-control date_picker" id="inputUserRole_startDate_'+global_role_type_counter+'" placeholder="Start"><span class="sprite sprite-ico_calender"></span></div></div><div class="col-xs-6 no_right_pad"><div class="date_component"><input type="text" class="form-control date_picker" id="inputUserRole_endDate_'+global_role_type_counter+'" placeholder="End"><span class="sprite sprite-ico_calender"></span></div></div></div><div class="col-lg-4 col-sm-6 no_padding field_help_text">Please specify dates ONLY if access is limited for a period of time</div></div><div class="form-group clearfix"><label class="control-label required" for="inputUserRole_Restrict_'+global_role_type_counter+'">Role Authorization</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select id="inputUserRole_Restrict_'+global_role_type_counter+'" class="form-control normal_selector role_restrict_select" data-placeholder="Select Role Authorization" data-tags="true"><option></option><option>Country</option><option>Project</option><option>Loan</option><option>Borrower of Record</option></select></div><div class="col-lg-4 col-sm-6"><input type="button" value="Add" class="btn btn_add_more mar_t4 select_roleRestrict" rel="select_roleRestrict_table_'+global_role_type_counter+'"></div></div><div class="selected_role_restrict_wrapper select_roleRestrict_table_'+global_role_type_counter+'"><table width="100%" cellspacing="0" cellpadding="0" rel="" class="tbl table tbl_type2"><thead><tr><th width="20%">Type</th><th width="20%">Country</th><th width="50%">Description</th><th width="10%"><span class="sprite sprite-ico_delete_bin"></span></th></tr></thead><tbody></tbody></table></div>');
            $('.date_picker').datepicker();
            $('.normal_selector').select2({
                width: "100%"
            });
        };

        /*user role starts*/

        var items_selecting_row_country_counter;
        var row_rel_name;
        var parent_row_rel_name;
        var role_restrict_type;
        var current_role_type_item;

        $(document).on('click', '.select_roleRestrict' , function(){

            role_restrict_type = $(this).parents('.role_type_item').find('.role_restrict_select');
            current_role_type_item = $(this).parents('.role_type_item').attr('rel');

            // var role_restrict_type = $('#inputUserRole_Restrict_'+global_role_type_counter).val();
            
            if(role_restrict_type.val() ==""){
                $('.role_restrict_popup').modal();
            }
            
            if(role_restrict_type.val() == "Country"){
                $('.country_list_popup').modal();
            }
            else if(role_restrict_type.val() == "Project"){
                $('.project_list_popup').modal();
                //$('.'+current_role_type_item+' .selected_role_restrict_wrapper tbody *[class^='+parent_row_rel_name+']').empty();
            }
            else if(role_restrict_type.val() == "Loan"){
                $('.loan_list_popup').modal();
            }
            else if(role_restrict_type.val() == "Borrower of Record"){
                $('.borrow_list_popup').modal();
            }
        });

        /*user role ends*/

        /*country user role starts*/

        
        $(document).on('click', '.selecting_row_country tbody tr', function(){

            row_rel_name = $(this).attr('rel');
            parent_row_rel_name = $(this).parents('table').attr('rel');


            $(this).toggleClass('select_row');
            $(this).removeClass('selected_row');

            items_selecting_row_country_counter = $('.selecting_row_country tbody .select_row').length;

            
            if(items_selecting_row_country_counter == 0){
                $('.selected_country_list_table_wrapper').show();
                $('.selected_country_list_table tbody').empty();
            }
            else{
                $('.selected_country_list_table_wrapper').show();
                $(this).find('input[type="checkbox"]').prop('checked', true);

                
                //$('.selected_country_list_table tbody').append('<tr class="'+row_rel_name+'">'+$(this).html()+'<td><span class="sprite sprite-ico_delete_bin delete_selecting_row_country"></span></td></tr>');

                $('.selected_country_list_table tbody').append('<tr class="'+row_rel_name+'_'+global_role_type_counter+'"><td>Country</td><td class="not_in_main_table">'+$(this).find("td:nth-child(2)").html()+'</td><td>'+$(this).find("td:nth-child(3)").html()+'</td><td>All Borrower of Records, Projects &amp; Loans under this country</td><td><span class="sprite sprite-ico_delete_bin delete_selecting_row_country"></span></td></tr>');
            }
             
            if(!$(this).hasClass('select_row')){
                $('.'+row_rel_name+'_'+global_role_type_counter).remove();
                $(this).find('input[type="checkbox"]').prop('checked', false);                

            }
            
        });

        

        $(document).on('click', '.delete_selecting_row_country' , function(){
            var delete_selected_country_row_item = $(this).parents('tr').attr('class');
            
            var country_list_row_to_del = delete_selected_country_row_item.split('_');
            country_list_row_to_del = country_list_row_to_del[0]+'_'+country_list_row_to_del[1]+'_'+country_list_row_to_del[2]+'_'+country_list_row_to_del[3];
            

            $("."+delete_selected_country_row_item).remove();
            $("[rel="+country_list_row_to_del+"]").removeClass('select_row');
            
            $("[rel="+country_list_row_to_del+"]").find('input[type="checkbox"]').prop('checked', false);

        });

        $(document).on('click', '.add_selected_role_restrict_country' , function(){
            //alert(string_selecting_row_country_list);            
            
            $('.'+current_role_type_item+' .selected_role_restrict_wrapper tbody *[class^='+parent_row_rel_name+']').remove();
            
            $('.'+current_role_type_item+' .selected_role_restrict_wrapper tbody').append($('.selected_country_list_table tbody').html());

            $('#country_list_table tbody tr').removeClass('select_row');
            $('#country_list_table tbody tr').find('input[type="checkbox"]').prop('checked', false);
            $('.selected_country_list_table tbody').empty();
            
            role_restrict_type.val(null).trigger("change");
        });




        $(document).on('click', '.focus_roleRestrict' , function(){
            role_restrict_type.select2("open");
        });      

        
        /*country user role ends*/
        


        /*project user role starts*/

        var items_selecting_row_project_counter;
        
        $(document).on('click', '.selecting_row_project tbody tr', function(){

            row_rel_name = $(this).attr('rel');
            parent_row_rel_name = $(this).parents('table').attr('rel');


            $(this).toggleClass('select_row');
            $(this).removeClass('selected_row');

            items_selecting_row_project_counter = $('.selecting_row_project tbody .select_row').length;

            
            if(items_selecting_row_project_counter == 0){
                $('.selected_project_list_table_wrapper').show();
                $('.selected_project_list_table tbody').empty();
            }
            else{
                $('.selected_project_list_table_wrapper').show();
                $(this).find('input[type="checkbox"]').prop('checked', true);

                $('.selected_project_list_table tbody').append('<tr class="'+row_rel_name+'_'+global_role_type_counter+'"><td>Projects</td><td>'+$(this).find("td:nth-child(2)").html()+'</td><td>'+$(this).find("td:nth-child(3)").html()+'</td><td>'+$(this).find("td:nth-child(4)").html()+'</td>'+$(this).find("td:nth-child(4)").html()+'<td><span class="sprite sprite-ico_delete_bin delete_selecting_row_project"></span></td></tr>');
                
                
                $('.'+current_role_type_item+' .selected_role_restrict_wrapper tbody').append('<tr class="'+row_rel_name+'_'+global_role_type_counter+'"><td>Project</td><td>'+$(this).find($('td:nth-child(4)')).html()+'</td><td>'+$(this).find($('td:nth-child(2)')).html()+'-'+$(this).find($('td:nth-child(3)')).html()+'</td><td><span class="sprite sprite-ico_delete_bin delete_selecting_row_project"></span></td></tr>');
            }
             
            if(!$(this).hasClass('select_row')){
                $('.'+row_rel_name).remove();
                $('.'+row_rel_name+'_'+global_role_type_counter).remove();
                $(this).find('input[type="checkbox"]').prop('checked', false);                
            }
            
        });

        

        $(document).on('click', '.delete_selecting_row_project' , function(){
            
            var delete_selected_project_row_item = $(this).parents('tr').attr('class');

            var project_list_row_to_del = delete_selected_project_row_item.split('_');
            project_list_row_to_del = project_list_row_to_del[0]+'_'+project_list_row_to_del[1]+'_'+project_list_row_to_del[2]+'_'+project_list_row_to_del[3];
            
            $("."+delete_selected_project_row_item).remove();
            $("[rel="+project_list_row_to_del+"]").removeClass('select_row');
            
            $("[rel="+project_list_row_to_del+"]").find('input[type="checkbox"]').prop('checked', false);

        });


        $(document).on('click', '.add_selected_role_restrict_project' , function(){
                    
            $('.'+current_role_type_item+' .selected_role_restrict_wrapper tbody *[class^='+parent_row_rel_name+']').show();
            

            $('#project_list_table tbody tr').removeClass('select_row');
            $('#project_list_table tbody tr').find('input[type="checkbox"]').prop('checked', false);
            $('.selected_project_list_table tbody').empty();
            
            role_restrict_type.val(null).trigger("change");
        });


        /*project user role ends*/


        /*loan user role starts*/

        var items_selecting_row_loan_counter;
        
        $(document).on('click', '.selecting_row_loan tbody tr', function(){

            row_rel_name = $(this).attr('rel');
            parent_row_rel_name = $(this).parents('table').attr('rel');


            $(this).toggleClass('select_row');
            $(this).removeClass('selected_row');

            items_selecting_row_loan_counter = $('.selecting_row_loan tbody .select_row').length;

            
            if(items_selecting_row_loan_counter == 0){
                $('.selected_loan_list_table_wrapper').show();
                $('.selected_loan_list_table tbody').empty();
            }
            else{
                $('.selected_loan_list_table_wrapper').show();
                $(this).find('input[type="checkbox"]').prop('checked', true);

                $('.selected_loan_list_table tbody').append('<tr class="'+row_rel_name+'_'+global_role_type_counter+'">'+$(this).html()+'<td><span class="sprite sprite-ico_delete_bin delete_selecting_row_loan"></span></td></tr>');
                
                $('.'+current_role_type_item+' .selected_role_restrict_wrapper tbody').append('<tr class="'+row_rel_name+'_'+global_role_type_counter+'"><td>Loan</td><td>'+$(this).find($('td:nth-child(6)')).html()+'</td><td>'+$(this).find($('td:nth-child(3)')).html()+'-'+$(this).find($('td:nth-child(5)')).html()+'</td><td><span class="sprite sprite-ico_delete_bin delete_selecting_row_loan"></span></td></tr>');
            }
             
            if(!$(this).hasClass('select_row')){
                $('.'+row_rel_name).remove();
                $('.'+row_rel_name+'_'+global_role_type_counter).remove();
                $(this).find('input[type="checkbox"]').prop('checked', false);                
            }
            
        });

        

        $(document).on('click', '.delete_selecting_row_loan' , function(){
            
            var delete_selected_loan_row_item = $(this).parents('tr').attr('class');

            var loan_list_row_to_del = delete_selected_loan_row_item.split('_');
            loan_list_row_to_del = loan_list_row_to_del[0]+'_'+loan_list_row_to_del[1]+'_'+loan_list_row_to_del[2]+'_'+loan_list_row_to_del[3];
            
            $("."+delete_selected_loan_row_item).remove();
            $("[rel="+loan_list_row_to_del+"]").removeClass('select_row');
            
            $("[rel="+loan_list_row_to_del+"]").find('input[type="checkbox"]').prop('checked', false);

        });


        $(document).on('click', '.add_selected_role_restrict_loan' , function(){
                    
            $('.'+current_role_type_item+' .selected_role_restrict_wrapper tbody *[class^='+parent_row_rel_name+']').show();
            

            $('#loan_list_table tbody tr').removeClass('select_row');
            $('#loan_list_table tbody tr').find('input[type="checkbox"]').prop('checked', false);
            $('.selected_loan_list_table tbody').empty();
            
            role_restrict_type.val(null).trigger("change");
        });


        /*loan user role ends*/



        /*borrow user role starts*/

        var items_selecting_row_borrow_counter;
        
        $(document).on('click', '.selecting_row_borrow tbody tr', function(){

            row_rel_name = $(this).attr('rel');
            parent_row_rel_name = $(this).parents('table').attr('rel');


            $(this).toggleClass('select_row');
            $(this).removeClass('selected_row');

            items_selecting_row_borrow_counter = $('.selecting_row_borrow tbody .select_row').length;

            
            if(items_selecting_row_borrow_counter == 0){
                $('.selected_borrow_list_table_wrapper').show();
                $('.selected_borrow_list_table tbody').empty();
            }
            else{
                $('.selected_borrow_list_table_wrapper').show();
                $(this).find('input[type="checkbox"]').prop('checked', true);


                $('.selected_borrow_list_table tbody').append('<tr class="'+row_rel_name+'_'+global_role_type_counter+'">'+$(this).html()+'<td><span class="sprite sprite-ico_delete_bin delete_selecting_row_borrow"></span></td></tr>');
                
                //$('.select_roleRestrict_table_'+global_role_type_counter+' tbody').append('<tr class="'+row_rel_name+'"><td>Borrower of Record</td><td>'+$(this).find("td:nth-child(3)").html()+'</td><td>'+$(this).find("td:nth-child(2)").html()+'</td><td><span class="sprite sprite-ico_delete_bin delete_selecting_row_borrow"></span></td></tr>');

                $('.'+current_role_type_item+' .selected_role_restrict_wrapper tbody').append('<tr class="'+row_rel_name+'_'+global_role_type_counter+'"><td>Borrower of Record</td><td>'+$(this).find($('td:nth-child(3)')).html()+'</td><td>'+$(this).find($('td:nth-child(2)')).html()+'</td><td><span class="sprite sprite-ico_delete_bin delete_selecting_row_borrow"></span></td></tr>');
            }
             
            if(!$(this).hasClass('select_row')){
                $('.'+row_rel_name).remove();
                $('.'+row_rel_name+'_'+global_role_type_counter).remove();
                $(this).find('input[type="checkbox"]').prop('checked', false);                
            }
            
        });

        

        $(document).on('click', '.delete_selecting_row_borrow' , function(){

            var delete_selected_borrow_row_item = $(this).parents('tr').attr('class');

            var borrower_list_row_to_del = delete_selected_borrow_row_item.split('_');
            borrower_list_row_to_del = borrower_list_row_to_del[0]+'_'+borrower_list_row_to_del[1]+'_'+borrower_list_row_to_del[2]+'_'+borrower_list_row_to_del[3];
            
            $("."+delete_selected_borrow_row_item).remove();
            $("[rel="+borrower_list_row_to_del+"]").removeClass('select_row');
            
            $("[rel="+borrower_list_row_to_del+"]").find('input[type="checkbox"]').prop('checked', false);

        });
        


        
        $(document).on('click', '.add_selected_role_restrict_borrow' , function(){
                    
            $('.'+current_role_type_item+' .selected_role_restrict_wrapper tbody *[class^='+parent_row_rel_name+']').show();
            

            $('#borrow_list_table tbody tr').removeClass('select_row');
            $('#borrow_list_table tbody tr').find('input[type="checkbox"]').prop('checked', false);
            $('.selected_borrow_list_table tbody').empty();
            
            role_restrict_type.val(null).trigger("change");
        });


        /*borrow user role ends*/



        $('#country_list_table tbody .css-labelChk, #project_list_table tbody .css-labelChk, #loan_list_table tbody .css-labelChk, #borrow_list_table tbody .css-labelChk').click(function(e){
            e.preventDefault();
        });



        


        $(document).on('click', '.add_another_role_link', function(){
            first_user_role_type = true;

            global_role_type_counter++;

            $('.user_role_assigned').append('<div rel="role_restrict_wrapper_'+global_role_type_counter+'" class="role_type_item role_details_wrapper_'+global_role_type_counter+'"><fieldset><legend class="clearfix"><span class="pull-left">Role '+global_role_type_counter+' </span><span class="sprite sprite-ico_delete_x delete_role_type" rel=""></span></legend><div class="col-md-12"><div class="form-group clearfix"><label class="control-label required" for="inputUserRole_'+global_role_type_counter+'">Role</label><div class="clear"></div><div class="col-lg-4 col-sm-6 no_padding"><select id="inputUserRole_'+global_role_type_counter+'" class="form-control normal_selector user_role_type" data-placeholder="Select Role" data-tags="true"><option></option><option>Role 1</option><option>Role 2</option><option>Role 3</option><option>Role 4</option></select></div><div class="col-lg-4 col-sm-6 no_padding"></div></div><div class="role_restrict_wrapper_'+global_role_type_counter+'"></div></div></div><hr/>');
            $('.normal_selector').select2({
                minimumResultsForSearch: Infinity,
                width: "100%"
            });
        });


        $(document).on('click', '.delete_role_type', function(){
            $(this).parents('.role_type_item').next('hr').remove();
            $(this).parents('.role_type_item').remove();
        });

        $(document).on('click', '.user_prov_review_link', function(){
            window.location.href = 'user_details_review.html';
        });

        /*user role details ends*/
        
        /*asl page starts*/
        $(document).on('click', '.confirm_asl_submit', function(){
            $('.confirm_asl_submit_popup').modal();
        });

        $(document).on('click', '.acc_loan_success', function(){
            $('.acc_loan_success_popup').modal();
        });

        

        $(document).on('click', '.signatory_user_add', function(){
            $('.user_add_success').show();
        });
		
		$(document).on('click', '.disabled_switch', function(e){
            e.preventDefault();
        });
        /*asl page ends*/
        

        /*15_mar_2016 to fix multiple line checkbox*/
        $(document).on("click", ".mutli_line_chkbox", function(){
            $(this).prev('label').trigger('click');
        });



        /*scroll table*/

       
        $(document).on("click",'.next_column_long',function(){
            var current_scroller =  $(this).parents('.scroll_table_wrapper').find('.dataTables_scrollBody');
            
            var current_scroll_table_position = current_scroller.find('.last_col').offset();
            var table_mask_width = current_scroller.width()-20;

            if(!$(this).children().hasClass('disabled')){
                current_scroller.animate( { scrollLeft: '+=700' }, 500);
                $(this).next('.prev_column_long').children('span').removeClass('disabled');
            }

            if(current_scroll_table_position.left < table_mask_width){
                $(this).children('span').addClass('disabled');
            }
        })

         $(document).on("click",'.prev_column_long',function(){
            var current_scroller =  $(this).parents('.scroll_table_wrapper').find('.dataTables_scrollBody');
            
            var current_scroll_table_position = current_scroller.find('.last_col').offset();
            var table_mask_width = current_scroller.width()-50;

            if(!$(this).children().hasClass('disabled')){
                current_scroller.animate( { scrollLeft: '-=700' }, 500);
                $(this).prev('.next_column_long').children('span').removeClass('disabled');
            }
            
            if(current_scroll_table_position.left > table_mask_width){
                $(this).children('span').addClass('disabled');
            }
        })

        /*column scroll funcionality*/
        
        /* Prefilled user page - starts here */        
		
    // modifidy new
//	var current_div_del_add;
    $(document).on('click','.client_type_popup .add-investor-Contact1',function() {
        $(this).hide();
        cur_ele = $(this);
        portfolio_pop_generate(cur_ele);
        $(".count"+global_authorization_wrapper_count + " .pop_select_hide").hide();
        $("#search"+global_authorization_wrapper_count).multiselect(); // Client Reports - Multiselect
        $("#search_cust"+global_authorization_wrapper_count).multiselect(); // Custodian Reports - Multiselect
        $(".popup_hide_con.count"+global_authorization_wrapper_count).css("border-top","1px solid #ccc");
        global_authorization_wrapper_count++;
		$('[data-toggle="popover"]').popover(); 
		current_div_del_add = $(this).parents(".popup_hide_section");
		if($(current_div_del_add).find(".popup_hide_con").length > 1){
		$(current_div_del_add).find(".popup_hide_con").first().find(".delete_img").removeClass("hide");		
		}


        
    });
	
	// Client Type code
	
	 $(document).on('click','.add_client_type',function() {
	   clienttype_pop_generate()
        $(".count"+global_authorization_wrapper_count + " .pop_select_hide").hide();
        $("#search"+global_authorization_wrapper_count).multiselect(); // Client Reports - Multiselect
        $("#search_cust"+global_authorization_wrapper_count).multiselect(); // Custodian Reports - Multiselect
        global_authorization_wrapper_count++;
		$('[data-toggle="popover"]').popover(); 
		$(".Client_type_container").find(".Client_type_section").first().find(".remove_client").removeClass("hide");
		
    });
		
        $(document.body).on('change', '#inputClientType' ,function(){
            //$('.loan_info_wrapper').slideToggle();
            $(this).parent().parent().parent().parent(".Client_type_section").find('.client_type_popup .loan_info_wrapper').show();
            $(this).parent().parent().parent().parent(".Client_type_section").find('.client_type_popup .loan_info_wrapper .popup_hide_con').show();
            //$('.client_type_popup .loan_info_wrapper').show();
            //$(this).closest('div').find('.client_type_popup .loan_info_wrapper').show();
            $(this).parent().parent().parent().parent(".Client_type_section").find('.client_type_popup .loan_info_wrapper .popup_hide_con .pop_select_hide').hide();
        });

        $("input[name='inputOverrideOptions']").click(function(){
            var selectedDomainValue = ($("input[name='inputOverrideOptions']:checked").val()) == "yes" ? 1 : 0;
            if(selectedDomainValue) {
                $('.confirm_code').show();
            } else {
                $('.confirm_code').hide();
            }
        });

        function portfolio_pop_generate(){
            cur_ele.parents('.Client_type_section').find('.popup_hide_section').append('<div class="clear"></div><div class="col-sm-12 popup_hide_con count'+global_authorization_wrapper_count+'"><div class="col-sm-6 left_popcon"><div class="col-sm-3"><div class="no_left_pad"><label for="inputClientType" class="control-label required">Portfolio</label></div></div><div class="col-sm-5"><select class="form-control portfolio_select pos_div"><option value="">Select</option><option value="">UST</option><option value="">Test</option></select></div><div class="clear"></div><div class="pop_select_hide client_reports col-sm-12"><h4><b>Client Reports</b></h4><div class="col-sm-5 no_left_pad"><label class="control-label">Available</label><select name="from[]" id="search'+global_authorization_wrapper_count+'" class="form-control" size="6" multiple="multiple"><option value="1">Daily Unaudited Holdings</option><option value="2">Daily Unaudited Holdings</option><option value="3">Daily Unaudited Trades</option><option value="4">Daily Unaudited Trades</option><option value="5">Daily Unaudited Holdings</option><option value="6">Daily Unaudited Holdings</option></select></div><div class="col-sm-2 col-lg-1 text-center btn_multiselect no_left_pad"><p><span class="sprite sprite-news_car_right_all" id="search'+global_authorization_wrapper_count+'_rightAll" title="Add All"></span></p><p><span class="sprite sprite-news_car_right" id="search'+global_authorization_wrapper_count+'_rightSelected" title="Add Selected"></span></p><p><span class="sprite sprite-news_car_left" id="search'+global_authorization_wrapper_count+'_leftSelected" title="Remove Selected"></span></p><p><span class="sprite sprite-news_car_left_all" id="search'+global_authorization_wrapper_count+'_leftAll" title="Remove All"></span></p></div><div class="col-sm-5 no_right_pad"><label class="control-label">Selected</label><select name="to[]" id="search'+global_authorization_wrapper_count+'_to" class="form-control" size="6" multiple="multiple"></select></div><a class="btn btn_add_more add-investor-Contact1" href="javascript:;">Add Another Portfolio</a></div></div><div class="col-sm-6 col-lg-6 right_popcon"><div class="col-sm-7 col-lg-5"><div class="col-lg-7 col-sm-7 no_left_pad"><label for="inputClientType" class="control-label required cus_label_ipad">Has custodian</label></div><div class="form-group col-lg-5 col-sm-5 no_padding" id="count'+global_authorization_wrapper_count+'"><span class="ico-checkbox_switch">Yes</span></div></div><div class="col-sm-4 col-lg-6 on_off_select hide count'+global_authorization_wrapper_count+'"><select class="form-control cust_select col-sm-6 col-lg-6"><option value="">Select</option><option value="">Citybank</option><option value="">Test</option></select> <span class="info_wrapper_pos col-sm-2 col-lg-2"><a tabindex="0" class="info_links" role="button" data-placement="top" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." data-original-title=""> <span class="sprite sprite-ico_info"></span> </a> </span></div><div class="col-sm-1 col-lg-1 no_padding"><p class="row_deletor delete_img"><span rel="portfolio_del" data-toggle="modal" class="sprite sprite-ico_delete_bin delete_popup_section" data-target=".portfolio_delete-modal-sm"></span></p></div><div class="clear"></div><div class="pop_select_hide col-sm-12 cust_reports"><h4><b>Custodian Reports</b></h4><div class="col-sm-5 no_left_pad"><label class="control-label">Available</label><select name="from[]" id="search_cust'+global_authorization_wrapper_count+'" class="form-control" size="6" multiple="multiple"><option value="1">Daily Unaudited Holdings</option><option value="2">Daily Unaudited Holdings</option><option value="3">Daily Unaudited Trades</option><option value="4">Daily Unaudited Trades</option><option value="5">Daily Unaudited Holdings</option><option value="6">Daily Unaudited Holdings</option></select></div><div class="col-sm-2 col-lg-1 text-center btn_multiselect no_left_pad"><p><span class="sprite sprite-news_car_right_all" id="search_cust'+global_authorization_wrapper_count+'_rightAll" title="Add All"></span></p><p><span class="sprite sprite-news_car_right" id="search_cust'+global_authorization_wrapper_count+'_rightSelected" title="Add Selected"></span></p><p><span class="sprite sprite-news_car_left" id="search_cust'+global_authorization_wrapper_count+'_leftSelected" title="Remove Selected"></span></p><p><span class="sprite sprite-news_car_left_all" id="search_cust'+global_authorization_wrapper_count+'_leftAll" title="Remove All"></span></p></div><div class="col-sm-5 no_right_pad"><label class="control-label">Selected</label><select name="to[]" id="search_cust'+global_authorization_wrapper_count+'_to" class="form-control" size="6" multiple="multiple"></select></div></div></div></div>');
        }
        
function clienttype_pop_generate(){
            $('.Client_type_container').append('<div class="clear"></div> <div class="Client_type_section count'+global_authorization_wrapper_count+'"><div class="form-group clearfix"><div class="col-md-12"><div class="col-lg-4 col-sm-6 no_padding"><div class="col-lg-6 col-sm-6 no_left_pad"><label for="inputClientType" class="control-label required">Client Type</label><span class="info_wrapper_pos"><a tabindex="0" class="info_links" role="button" data-toggle="popover" data-placement="top" data-trigger="focus" title="" data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." data-original-title=""> <span class="sprite sprite-ico_info"></span> </a> </span></div><div class="col-lg-4 col-sm-6 no_padding"></div></div><div class="clear"></div><div class="col-lg-2 col-sm-4 no_padding"><select class="form-control search_selector" id="inputClientType" data-tags="true" data-placeholder="Client Type" ><option>Select</option><option>RAMP</option><option>UST</option></select></div><div class="col-lg-2 col-sm-4 remove_client"> <a rel="clienttype_del" data-toggle="modal" class="btn btn_add_more add_client_type_delete" data-target=".clienttype_delete-modal-sm">Remove Client Type</a></div></div></div><div class="form-group clearfix client_type_popup"><div class="col-sm-12 no_padding"><div class="loan_info_wrapper"><div class="loan_info_arrow"></div><div class="row"><div class="form-group clearfix popup_hide_section"><div class="col-sm-12 popup_hide_con count'+global_authorization_wrapper_count+'"><div class="col-sm-6 left_popcon"><div class="col-sm-3"><div class="no_left_pad"><label for="inputClientType" class="control-label required">Portfolio</label></div></div><div class="col-sm-5"><select class="form-control portfolio_select pos_div"><option value="">Select</option><option value="">UST</option><option value="">Test</option></select></div><div class="clear"></div><div class="pop_select_hide client_reports col-sm-12"><h4><b>Client Reports</b></h4><div class="col-sm-5 no_left_pad"><label class="control-label">Available</label><select name="from[]" id="search'+global_authorization_wrapper_count+'" class="form-control" size="6" multiple="multiple"><option value="1">Daily Unaudited Holdings</option><option value="2">Daily Unaudited Holdings</option><option value="3">Daily Unaudited Trades</option><option value="4">Daily Unaudited Trades</option><option value="5">Daily Unaudited Holdings</option><option value="6">Daily Unaudited Holdings</option></select></div><div class="col-sm-2 col-lg-1 text-center btn_multiselect no_left_pad"><p><span class="sprite sprite-news_car_right_all" id="search'+global_authorization_wrapper_count+'_rightAll" title="Add All"></span></p><p><span class="sprite sprite-news_car_right" id="search'+global_authorization_wrapper_count+'_rightSelected" title="Add Selected"></span></p><p><span class="sprite sprite-news_car_left" id="search'+global_authorization_wrapper_count+'_leftSelected" title="Remove Selected"></span></p><p><span class="sprite sprite-news_car_left_all" id="search'+global_authorization_wrapper_count+'_leftAll" title="Remove All"></span></p></div><div class="col-sm-5 no_right_pad"><label class="control-label">Selected</label><select name="to[]" id="search'+global_authorization_wrapper_count+'_to" class="form-control" size="6" multiple="multiple"></select></div><a class="btn btn_add_more add-investor-Contact1" href="javascript:;">Add Another Portfolio</a></div></div><div class="col-sm-6 col-lg-6 right_popcon"><div class="col-sm-7 col-lg-5"><div class="col-lg-7 col-sm-7 no_left_pad"><label for="inputClientType" class="control-label required cus_label_ipad">Has custodian</label></div><div class="form-group col-lg-5 col-sm-5 no_padding" id="count'+global_authorization_wrapper_count+'"><span class="ico-checkbox_switch">Yes</span></div></div><div class="col-sm-4 col-lg-6 on_off_select hide count'+global_authorization_wrapper_count+'"><select class="form-control cust_select col-sm-6 col-lg-6"><option value="">Select</option><option value="">Citybank</option><option value="">Test</option></select> <span class="info_wrapper_pos col-sm-2 col-lg-2"><a tabindex="0" class="info_links" role="button" data-placement="top" data-toggle="popover" data-trigger="focus" title="" data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." data-original-title=""> <span class="sprite sprite-ico_info"></span> </a> </span></div><div class="col-sm-1 col-lg-1 no_padding"><p class="row_deletor delete_img hide"><span rel="portfolio_del" data-toggle="modal" class="sprite sprite-ico_delete_bin delete_popup_section" data-target=".portfolio_delete-modal-sm"></span></p></div><div class="clear"></div><div class="pop_select_hide col-sm-12 cust_reports"><h4><b>Custodian Reports</b></h4><div class="col-sm-5 no_left_pad"><label class="control-label">Available</label><select name="from[]" id="search_cust'+global_authorization_wrapper_count+'" class="form-control" size="6" multiple="multiple"><option value="1">Daily Unaudited Holdings</option><option value="2">Daily Unaudited Holdings</option><option value="3">Daily Unaudited Trades</option><option value="4">Daily Unaudited Trades</option><option value="5">Daily Unaudited Holdings</option><option value="6">Daily Unaudited Holdings</option></select></div><div class="col-sm-2 col-lg-1 text-center btn_multiselect no_left_pad"><p><span class="sprite sprite-news_car_right_all" id="search_cust'+global_authorization_wrapper_count+'_rightAll" title="Add All"></span></p><p><span class="sprite sprite-news_car_right" id="search_cust'+global_authorization_wrapper_count+'_rightSelected" title="Add Selected"></span></p><p><span class="sprite sprite-news_car_left" id="search_cust'+global_authorization_wrapper_count+'_leftSelected" title="Remove Selected"></span></p><p><span class="sprite sprite-news_car_left_all" id="search_cust'+global_authorization_wrapper_count+'_leftAll" title="Remove All"></span></p></div><div class="col-sm-5 no_right_pad"><label class="control-label">Selected</label><select name="to[]" id="search_cust'+global_authorization_wrapper_count+'_to" class="form-control" size="6" multiple="multiple"></select></div></div></div></div></div></div></div></div></div></div></div>');
        }
		
        $(document.body).on('change', '.portfolio_select' ,function(){
            $(this).parent().parent().find('.pop_select_hide.client_reports').slideToggle();
        });

        $(document.body).on('change', '.cust_select' ,function(){
            $(this).parent().parent().parent().find('.pop_select_hide.cust_reports').slideToggle();
        });
        /* Prefilled user page - ends here */

        $('.loan_handler').popover({ 
                html : true,
                container: 'body',
                template: '<div class="popover popover_global_elem"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"><p></p></div></div></div>',
                content: function() {
                  return $('#popover_content_loan').html();
                }
            });

         /* POrfolio summary  */
          
        $('.section_list li').click(function(){
            $('.section_list li').removeClass('active');
            $(this).addClass('active');
            var current_cate_to_view = $(this).attr("rel");
            $('.portfolio_summary_wrapper > div').hide();
            $('.portfolio_summary_wrapper > div.'+current_cate_to_view).show();
        });


        // Important date toggle

          $(document).on('click', '.important_date .title', function(){
            $(this).next('.date_wrapper').slideToggle();
            $(this).toggleClass('open');
         });

        
});


$(function(){

    //set global variables and cache DOM elements for reuse later
    var form = $('#contact-form'),
        formElements = form.find('input[type!="submit"],textarea'),
        formSubmitButton = form.find('input[type="submit"]'),
        errorNotice = $('#errors'),
        successNotice = $('#success'),
        loading = $('#loading'),
        errorMessages = {
            required: ' is a required field',
            email: 'You have not entered a valid email address for the field: '
        }
    
    //to ensure compatibility with HTML5 forms, we have to validate the form on submit button click event rather than form submit event. 
    //An invalid html5 form element will not trigger a form submit.
    formSubmitButton.on('click', function(){
        var formok = true,
            errors = [];
            
        formElements.each(function(){
            var name = this.name,
                nameUC = name.ucfirst(),
                value = this.value,
                placeholderText = this.getAttribute('placeholder'),
                type = this.getAttribute('type'), //get type old school way
                isRequired = this.getAttribute('required');
                
            //if HTML5 formfields are supported            
            if( (this.validity) && !this.validity.valid ){
                formok = false;
                
                //if there is a value missing
                if(this.validity.valueMissing){
                    errors.push(nameUC + errorMessages.required);    
                }
                //if this is an email input and it is not valid
                else if(this.validity.typeMismatch && type == 'email'){
                    errors.push(errorMessages.email + nameUC);
                }
                
                this.focus(); //safari does not focus element an invalid element
                return false;
            }
            
            //if this is a required element
            if(isRequired){    
                //if HTML5 input required attribute is not supported
                if(!Modernizr.input.required){
                    if(value == placeholderText){
                        this.focus();
                        formok = false;
                        errors.push(nameUC + errorMessages.required);
                        return false;
                    }
                }
            }

            //if HTML5 input email input is not supported
            if(type == 'email'){     
                if(!Modernizr.inputtypes.email){ 
                    var emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
                     if( !emailRegEx.test(value) ){    
                        this.focus();
                        formok = false;
                        errors.push(errorMessages.email + nameUC);
                        return false;
                    }
                }
            }
           
        });
        
        //if form is not valid
        if(!formok){
            
            //show error message 
            showNotice('error',errors);
            
        }
        //if form is valid
        else {
        	loading.show();
            $.ajax({
                url: form.attr('action'),
                type: form.attr('method'),
                data: form.serialize(),
                success: function(){
                    showNotice('success');
                    form.get(0).reset();
                    loading.hide();
                }
            });
        }
        
        return false; //this stops submission off the form and also stops browsers showing default error messages
        
    });

    //other misc functions
    function showNotice(type,data)
    {
        if(type == 'error'){
            successNotice.hide();
            errorNotice.find("li[id!='info']").remove();
            for(x in data){
                errorNotice.append('<li>'+data[x]+'</li>');    
            }
            errorNotice.show();
        }
        else {
            errorNotice.hide();
            successNotice.show();    
        }
    }
    
    String.prototype.ucfirst = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    
});
    var start=1;
	function set_time()
	{
	  setInterval(image_show,1000);
    }
	function image_show()
	{
    var image_data;
	
    if(start==1)
	{
	   image_data="images/1.jpg";
	}else if(start==2)
	{
        image_data="images/2.jpg";
    }else if(start==3)
	{
        image_data="images/3.jpg";
	
	}else if(start==4)
	{
        image_data="images/4.jpg";
	
	}else if(start==5)
	{
		image_data="images/5.jpg";
	}else if(start==6)
	{
		image_data="images/6.jpg";
	}else if(start==7)
    {
        image_data="images/7.jpg";
    }else if(start==8)
	{
		image_data="images/8.jpg";
	}else if(start==9)
	{
		image_data="images/9.jpg";
	}else if(start==10)
	{
		image_data="images/10.jpg";
	}else if(start==11)
	{
		image_data="images/11.jpg";
	}else if(start==12)
	{
        image_data="images/12.jpg";
	}else if(start==13)
	{
		image_data="images/13.jpg";
	}else if(start==14)
	{
        image_data="images/14.jpg";
	}else if(start==15)
    {
        image_data="images/15.jpg";
    }else if(start==16)
    {
		image_data="images/16.jpg";
	}else if(start==17)
	{
		image_data="images/17.jpg";
    }else if(start==18)
	{
	    image_data="images/18.jpg";
	}else if(start==19)
	{
		image_data="images/19.jpg";
    }else if(start==20)
	{
		image_data="images/20.jpg";
	}else if(start==21)
	{
        image_data="images/21.jpg";
    }else if(start==22)
	{
		image_data="images/22.jpg";
    }else if(start==23)
	{
		image_data="images/23.jpg";
	}else if(start==24)
	{
		image_data="images/24.jpg";
	}else if(start==25)
	{
        image_data="images/25.jpg";
    }
	else
	{
		start=1;
	}
	document.getElementById("data").src=""+image_data;
	start=start+1;
	}                

			
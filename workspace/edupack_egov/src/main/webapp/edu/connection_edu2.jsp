<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="com.nexacro.java.xapi.data.datatype.*" %>
<%@ page import="java.io.*,java.util.*,javax.mail.*"%>
<%@ page import="javax.mail.internet.*,javax.activation.*"%>
<%@ page import="javax.servlet.http.*,javax.servlet.*" %>
<%!
public class SMTPAuthenticator extends javax.mail.Authenticator {
	public PasswordAuthentication getPasswordAuthentication() {
		// 네이버나 Gmail 사용자 계정 설정.
		// Gmail의 경우 @gmail.com을 제외한 아이디만 입력한다.
		return new PasswordAuthentication("helpdesk@tobesoft.com", "0701");
	}      
}
%>
<%
String strCharset = "UTF-8";
   /*********************************************************
   * request로 들어온 내용을 parsing하여
   * input variable list, input dataset list에 저장한다.
   * (XPlatform 에서 보내온 데이터를 parsing한다.)
   *********************************************************/
   PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML, strCharset);
   platformRequest.receiveData();
   PlatformData inPD = platformRequest.getData();

   VariableList    inVariableList  = inPD.getVariableList();
   DataSetList     inDataSetList   = inPD.getDataSetList();

   DataSet inDataset = inDataSetList.get("dsMail");

   String req_id         = inDataset.getString(0,"id");          
   String req_mailto     = inDataset.getString(0,"mailto");    
   String req_subject    = inDataset.getString(0,"subject");    
   String req_contents   = inDataset.getString(0,"contents");    
   String carbon_Copy    = "";//inDataset.getString(0, "cc");
   String req_mailForm   = inDataset.getString(0, "mailFrom");
   
   out.clear();
   out = pageContext.pushBody();

//System.out.println("req_id:"+req_id);	
//System.out.println("req_mailto:"+req_mailto);	
//System.out.println("req_subject"+req_subject);	
//System.out.println("req_contents:"+req_contents);	
//System.out.println("carbon_Copy:"+carbon_Copy);	
//System.out.println("req_mailForm:"+req_mailForm	);
   PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), PlatformType.CONTENT_TYPE_XML, strCharset);
   PlatformData outPD = platformRequest.getData();
   VariableList    outVariableList  = new VariableList();

   String result;
   // Recipient's email ID needs to be mentioned.
   String to = req_mailto;

   // Sender's email ID needs to be mentioned
   //String from = "helpdesk@tobesoft.com";
   String from = req_mailForm;
   
	 //System.out.println("====>" + req_mailForm);
   // Assuming you are sending email from localhost
   String host = "smtp.tobesoft.com";

   // Get system properties object
   Properties properties = System.getProperties();

   // Setup mail server
   properties.setProperty("mail.smtp.host", host);

   properties.setProperty("mail.smtp.user", "admin");
   properties.setProperty("mail.smtp.port", "25"); 
   properties.setProperty("mail.smtp.auth", "true");
   properties.setProperty("mail.smtp.debug", "true");
   properties.setProperty("mail.smtp.socketFactory.port", "25");
   properties.setProperty("mail.smtp.socketFactory.fallback", "false");
	
	 Authenticator auth = new SMTPAuthenticator();
	Session mailSession = Session.getInstance(properties, auth);
   // Get the default Session object.
   //Session mailSession = Session.getDefaultInstance(properties, auth);

   try{
	   
      // Create a default MimeMessage object.
      MimeMessage message = new MimeMessage(mailSession);
      // Set From: header field of the header.
      message.setFrom(new InternetAddress(from));
      // Set To: header field of the header.
      message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
	  
	  //add cc (참조)
	  if(!carbon_Copy.equals(""))
	  {
	  message.addRecipient(Message.RecipientType.CC,
                               new InternetAddress(carbon_Copy));
	  }
    // Set Subject: header field
	  //message.setCharset("euc-kr");
    //message.setSubject(req_subject);
	  message.setSubject(MimeUtility.encodeText(req_subject, "UTF-8", "B"));
	  message.setSentDate(new Date());
    // Now set the actual message
    // message.setText(req_contents);
      

	//	message.setContent(mp); 
	  
	  // Send message	  
	  Transport.send(message);    
	   
    result = "success";
    outVariableList.add("ErrorCode", 0);
    outVariableList.add("ErrorMsg",  result);
 

   } catch (MessagingException mex) {
      mex.printStackTrace();
      result = "Error: unable to send message....";
      
      outVariableList.add("ErrorCode", -1);
      //outVariableList.add("ErrorMsg",  result);
	  outVariableList.add("ErrorMsg",  mex.toString());
   } finally {

        // 조회 결과(Output Dataset List, Output Variable List)를 XPlatform 으로 전송
        outPD.setVariableList(outVariableList);
        platformResponse.setData(outPD);
        platformResponse.sendData();
    }
%>
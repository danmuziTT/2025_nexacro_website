<%@ page contentType="text/html;charset=utf-8" pageEncoding="utf-8" %>
<%@ page language="java"%>
<%@ page import="java.io.File"%>
<%@ page import="java.util.Enumeration"%>
<%@ page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>

<%
	request.setCharacterEncoding("utf-8");

	String sRealPath = request.getSession().getServletContext().getRealPath("/edupack_jsp/");	//http://localhost:8080/edu/edupack_jsp/
	String sPath     = request.getParameter("PATH");	// "/upload"
	
	String uploadPath   = sRealPath + sPath;
	int    nMaxSize  = 500 * 1024 * 1024; // 최대 업로드 파일 크기 500MB(메가)로 제한

	File extFolder = new File(uploadPath);
	if(!extFolder.exists()){
		extFolder.mkdir();
	}
	
	PlatformData resData    = new PlatformData();
	VariableList resVarList = resData.getVariableList();
	
	try 
	{
		MultipartRequest multi = new MultipartRequest(request, uploadPath, nMaxSize, "utf-8", new DefaultFileRenamePolicy());
		Enumeration files      = multi.getFileNames();
		
		DataSet ds = new DataSet("ds_result");		
		ds.addColumn(new ColumnHeader("FILE_NAME", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("FILE_TYPE", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("FILE_SIZE", DataTypes.LONG));
		ds.addColumn(new ColumnHeader("FILE_PATH", DataTypes.STRING));
		
		while (files.hasMoreElements()) 
		{
			String sName  = (String)files.nextElement();
			
			String sFName = multi.getFilesystemName(sName);
			String stype  = multi.getContentType(sName);
			
			int nRow = ds.newRow();
			ds.set(nRow, "FILE_NAME", sFName);
			ds.set(nRow, "FILE_TYPE", stype);

			File f = multi.getFile(sName);			
			if (f != null){
				ds.set(nRow, "FILE_SIZE", f.length());
				ds.set(nRow, "FILE_PATH", f.getPath());
			}		
		}
		
		resData.addDataSet(ds);
		resVarList.add("ErrorCode", 0);
		resVarList.add("ErrorMsg", "Success" );
	} 
	catch (Exception e) 
	{
		System.out.println(e.getMessage());
		resVarList.add("ErrorCode", -1);
		resVarList.add("ErrorMsg"  , e.getMessage());
	}

	HttpPlatformResponse res = new HttpPlatformResponse(response);
	res.setContentType(PlatformType.CONTENT_TYPE_XML);
	res.setData(resData);
	res.sendData();
%>

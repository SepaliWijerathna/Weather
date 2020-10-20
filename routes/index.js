var express = require('express');
var router = express.Router();
var convert = require('xml-js');


/* GET home page. */
router.get('/', function(req, res, next) {

  var xml =`<?xml version = "1.0" encoding = "UTF-8"?>

  <alert xmlns = "urn:oasis:names:tc:emergency:cap:1.2">
  
    <identifier>43b080713727</identifier> 
  
    <sender>hsas@dhs.gov</sender> 
  
    <sent>2003-04-02T14:39:01-05:00</sent>
  
    <status>Actual</status> 
  
    <msgType>Alert</msgType>
  
    <scope>Public</scope>  
  
    <info>
  
      <category>Security</category>   
  
      <event>Homeland Security Advisory System Update</event>   
  
      <urgency>Immediate</urgency>   
  
      <severity>Severe</severity>   
  
      <certainty>Likely</certainty>   
  
      <senderName>U.S. Government, Department of Homeland Security</senderName>
  
      <headline>Homeland Security Sets Code ORANGE</headline>
  
      <description>The Department of Homeland Security has elevated the Homeland Security Advisory System threat level to ORANGE / High in response to intelligence which may indicate a heightened threat of terrorism.</description>
  
      <instruction> A High Condition is declared when there is a high risk of terrorist attacks. In addition to the Protective Measures taken in the previous Threat Conditions, Federal departments and agencies should consider agency-specific Protective Measures in accordance with their existing plans.</instruction> 
  
      <web>http://www.dhs.gov/dhspublic/display?theme=29</web>
  
      <parameter>
  
        <valueName>HSAS</valueName>
  
        <value>ORANGE</value>
  
      </parameter>   
  
      <resource>
  
        <resourceDesc>Image file (GIF)</resourceDesc>
  
        <mimeType>image/gif</mimeType>   
  
        <uri>http://www.dhs.gov/dhspublic/getAdvisoryImage</uri>
  
      </resource>   
  
      <area>       
  
        <areaDesc>U.S. nationwide and interests worldwide</areaDesc>   
  
      </area>
  
    </info>
  
  </alert>`;

var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
console.log(result1);

  res.render('index', { title: 'Express' });
});

module.exports = router;

<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2 style="text-align:center;color:brown;">Students Personal Details</h2>
  <table style="border:1px solid black;margin-left:auto;margin-right:auto;">
    <tr bgcolor="#9ccd50">
      <th>Name</th>
      <th>Age</th>
      <th>DOB</th>
      <th>Mobile</th>
      <th>Address</th>
    </tr>
    <xsl:for-each select="students/student">
    <tr bgcolor="#fff" >
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="age"/></td>
      <td><xsl:value-of select="dob"/></td>
      <td><xsl:value-of select="mobile"/></td>
      <td><xsl:value-of select="address"/></td>
    </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>

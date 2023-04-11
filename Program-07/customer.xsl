<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2>Customer Details</h2>
  <table border="2">
    <tr bgcolor="lightgreen">
      <th>Name</th>
      <th>Phone</th>
      <th>Age</th>
      <th>City</th>
    </tr>
    <xsl:for-each select="root/customers/customer">
    <tr>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="phone"/></td>
      <td><xsl:value-of select="age"/></td>
      <td><xsl:value-of select="city"/></td>
    </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>
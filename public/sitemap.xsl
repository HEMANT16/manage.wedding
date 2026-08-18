<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap | Manage.Wedding</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #1e293b;
            background-color: #f8fafc;
            margin: 0;
            padding: 2rem 1rem;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            background: #ffffff;
            border: 2px solid #0f172a;
            border-radius: 12px;
            box-shadow: 4px 4px 0px #0f172a;
            padding: 2rem;
          }
          header {
            border-bottom: 2px dashed #cbd5e1;
            padding-bottom: 1.5rem;
            margin-bottom: 1.5rem;
          }
          h1 {
            font-size: 2rem;
            color: #0f172a;
            margin: 0 0 0.5rem 0;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          p.desc {
            color: #64748b;
            font-size: 1.05rem;
            margin: 0 0 1rem 0;
          }
          .stats-bar {
            display: flex;
            gap: 1.5rem;
            flex-wrap: wrap;
            background: #f1f5f9;
            border: 1.5px solid #cbd5e1;
            padding: 0.75rem 1.25rem;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 600;
          }
          .stats-bar span {
            color: #0f172a;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1.5rem;
            font-size: 0.92rem;
          }
          th {
            background-color: #f1f5f9;
            color: #0f172a;
            font-weight: 800;
            text-align: left;
            padding: 12px 14px;
            border-bottom: 2px solid #0f172a;
          }
          td {
            padding: 10px 14px;
            border-bottom: 1px solid #e2e8f0;
            vertical-align: middle;
          }
          tr:hover {
            background-color: #f8fafc;
          }
          a {
            color: #2563eb;
            text-decoration: none;
            font-weight: 600;
            word-break: break-all;
          }
          a:hover {
            text-decoration: underline;
          }
          .priority-badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: 800;
            border: 1px solid #cbd5e1;
            background: #f8fafc;
          }
          .priority-high {
            background: #fef2f2;
            color: #dc2626;
            border-color: #f87171;
          }
          .priority-med {
            background: #eff6ff;
            color: #2563eb;
            border-color: #93c5fd;
          }
          .badge-lang {
            display: inline-block;
            background: #f0fdf4;
            color: #166534;
            border: 1px solid #86efac;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 700;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>🗺️ XML Sitemap: Manage.Wedding</h1>
            <p class="desc">
              This is a standard XML sitemap generated for Google, Bing, and web search indexers. With this stylesheet, it is displayed in human-readable visual format.
            </p>
            <div class="stats-bar">
              <div>Total URLs: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong></div>
              <div>•</div>
              <div>Primary Domain: <span>https://manage.wedding</span></div>
              <div>•</div>
              <div>Format: <span>Sitemaps Protocol 0.9 with Multilingual Hreflang</span></div>
            </div>
          </header>

          <table>
            <thead>
              <tr>
                <th style="width: 5%;">#</th>
                <th style="width: 55%;">URL</th>
                <th style="width: 12%;">Priority</th>
                <th style="width: 13%;">Change Freq</th>
                <th style="width: 15%;">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td><xsl:value-of select="position()"/></td>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="sitemap:priority &gt;= 0.9">
                        <span class="priority-badge priority-high"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="priority-badge priority-med"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td><xsl:value-of select="sitemap:changefreq"/></td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

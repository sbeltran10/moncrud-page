import React from "react"

const DocumentationEnvironment = () => (
  <table class="table">
    <thead>
      <tr>
        <th>Variable</th>
        <th>Possible Values</th>
        <th>Description </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>PORT</td>
        <td>"port_number"</td>
        <td>Changes the default por (3003) of the app</td>
      </tr>
      <tr>
        <td>NODE_ENV</td>
        <td>prod</td>
        <td>Makes logs less verbose and disables debug mode from the sass middleware</td>
      </tr>
      <tr>
        <td>USE_SSL</td>
        <td>1</td>
        <td>Makes the app serve its content with HTTPS. To be used with CERT_FOLDER and KEY_FOLDER for SSL configuration</td>
      </tr>
      <tr>
        <td>CERT_FOLDER</td>
        <td>"path_to_certificate_folder"</td>
        <td>SSL configuration</td>
      </tr>
      <tr>
        <td>KEY_FOLDER</td>
        <td>"path_to_key_folder"</td>
        <td>SSL configuration</td>
      </tr>
    </tbody>
  </table>
)

export default DocumentationEnvironment

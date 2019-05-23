import React from "react"
import './documentation-support.css'


const DocumentationSupport = () => (
  <table class="table support-table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Read</th>
        <th>Create</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>String</td>
        <td className="support-yes">Yes</td>
        <td className="support-yes">Yes</td>
        <td className="support-yes">Yes</td>
      </tr>
      <tr>
        <td>Boolean</td>
        <td className="support-yes">Yes</td>
        <td className="support-yes">Yes</td>
        <td className="support-yes">Yes</td>
      </tr>
      <tr>
        <td>Number</td>
        <td className="support-yes">Yes</td>
        <td className="support-yes">Yes</td>
        <td className="support-yes">Yes</td>
      </tr>
      <tr>
        <td>Object</td>
        <td className="support-yes">Yes</td>
        <td className="support-no">No</td>
        <td className="support-no">No</td>
      </tr>
      <tr>
        <td>Date</td>
        <td className="support-yes">Yes</td>
        <td className="support-no">No</td>
        <td className="support-no">No</td>
      </tr>
      <tr>
        <td>ObjectId</td>
        <td className="support-yes">Yes</td>
        <td className="support-no">No</td>
        <td className="support-no">No</td>
      </tr>
      <tr>
        <td>Simple array (No Objects)</td>
        <td className="support-yes">Yes</td>
        <td className="support-no">No</td>
        <td className="support-no">No</td>
      </tr>
      <tr>
        <td>Complex array (Objects)</td>
        <td className="support-no">No</td>
        <td className="support-no">No</td>
        <td className="support-no">No</td>
      </tr>
      <tr>
        <td>Nested Object</td>
        <td className="support-yes">Yes</td>
        <td className="support-no">No</td>
        <td className="support-no">No</td>
      </tr>
    </tbody>
  </table>
)

export default DocumentationSupport

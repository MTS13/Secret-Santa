$(document).ready(() => {
  $.get(
    "http://lits-java3-secret-santa.herokuapp.com/company/my-company/list",
    data => {
      data.forEach(element => {
        let row = `
        <tr>
        <td>${element.companyName}</td>
        
        <td><button onclick="edit(1))">Role</button></td>
        </tr>`;
        $("#company_grid").append(row);
        $("#loading").hide();
      });
    }
  );
});

const addCompany = () => {
  // $.post("https://lits-java3-secret-santa.herokuapp.com/company/company?description=Sooper%20cool&name=SuperCoolDev");
  const companyName = $("#company_name").val();
  let companyDescription = $("textarea#company_description").val();
  console.log(companyDescription);
  companyDescription = companyDescription.split(" ").join("%20");

  $.post(
    `https://lits-java3-secret-santa.herokuapp.com/company/company?description=${companyDescription}&name=${companyName}`
  );

  let row = `
        <tr>
        <td>${companyName}</td>
        <td>${companyDescription}</td>
        <td><button onclick="edit(1))">Edit</button></td>
        </tr>`;
  $("#company_grid").append(row);
};

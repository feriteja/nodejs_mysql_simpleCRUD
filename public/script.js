getData();
async function getData() {
  const response = await fetch("/read");
  const json = await response.json();
  console.log(json);
  showData(json);
}

const btnSave = document.getElementById("btn_save");
btnSave.addEventListener("click", async event => {
  const action = btnSave.textContent;

  const id = document.getElementById("id").value;
  const cashier = document.getElementById("cashier").value;
  const product = document.getElementById("product").value;
  const category = document.getElementById("category").value;
  const price = document.getElementById("price").value;

  let data = {
    id: id,
    cashier: cashier,
    product: product,
    category: category,
    price: price
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  const response = await fetch("/api", options);
  const json = await response.json();
  console.log(json);

  getData();

  $("#exampleModal").modal("hide");

  if (action === "Simpan") {
    $.alert("Data Berhasil ditambah!");
  } else {
    $.alert("Data Berhasil dirubah!");
  }
});

function showData(json) {
  let tr = "";
  $("#databody").html("");
  let no;
  for (let i = 0; i < json.length; i++) {
    no = i + 1;
    tr = $("<tr/>");
    tr.append("<td>" + json[i].id_prod + "</td>");
    tr.append("<td>" + json[i].nm_cas + "</td>");
    tr.append("<td>" + json[i].nm_prod + "</td>");
    tr.append("<td>" + json[i].nm_cat + "</td>");
    tr.append("<td>" + json[i].prod_price + "</td>");
    tr.append(
      `
			<td>
				<button type="button" class="btn btn-primary btnEdit" data-id="` +
        json[i].id_prod +
        `">
					Edit
				</button>
				<button type="button" class="btn btn-danger btnHapus" data-id="` +
        json[i].id_prod +
        `">
					Hapus
				</button>
			</td>`
    );
    $("#databody").append(tr);
  }

  //Jquery Selector
  $(function() {
    $(".btnTambahData").on("click", function() {
      document.getElementById("id").readOnly = false;
      document.getElementById("id").value = "";
      document.getElementById("cashier").value = "";
      document.getElementById("product").value = "";
      document.getElementById("category").value = "";
      document.getElementById("price").value = "";

      $("#exampleModalLabel").html("Tambah Data Siswa");
      $(".modal-footer button[id=btn_save]").html("Simpan");
    });

    $(".btnEdit").on("click", async function() {
      let id = $(this).data("id");
      console.log(id);

      const url = `readbynis/${id}`;
      const response = await fetch(url);
      const json = await response.json();

      console.log(json);

      document.getElementById("id").readOnly = true;
      document.getElementById("id").value = json[0].id_prod;
      document.getElementById("cashier").value = json[0].nm_cas;
      document.getElementById("product").value = json[0].nm_prod;
      document.getElementById("category").value = json[0].nm_cat;
      document.getElementById("price").value = json[0].prod_price;

      $("#exampleModalLabel").html("Ubah Data ");
      $(".modal-footer button[id=btn_save]").html("Ubah Data");
      $("#exampleModal").modal("show");
    });

    $(".btnHapus").on("click", async function() {
      let id = $(this).data("id");

      $.confirm({
        title: "Hapus Data Siswa",
        content: "Apakah Anda Yakin...???",
        buttons: {
          ya: {
            text: "YA",
            btnClass: "btn-blue",
            action: async function() {
              const url = `hapus/${id}`;
              const response = await fetch(url);
              const json = await response.json();
              $.alert("Data Berhasil dihapus!");
              getData();
            }
          },
          tidak: function() {}
        }
      });
    });
  });
}

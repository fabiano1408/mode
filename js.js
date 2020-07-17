// $('#btnCriar').click(()=> console.log('modal'));
   //$('#modalCriar').click(()=> .modal('show'));
   $('#btnCriar'/*ID DO BOTÃO*/).click(function(){
    $('#modalCriar'/*ID DO MODAL */).modal('show')
    })
   $('#editark').click(function(){
   $('#edit').modal('show')
   })

$('#btnsav').click(function(){
 // $('#inputnovo').val()
 //    $('#inputidadenew').val()
//     console.log(inputnovo)
//      console.log(inputnovo, inputidadenew)
const inputnovo =  $('#inputnovo').val()
const inputidadenew =  $('#inputidadenew').val()
console.log(inputnovo, inputidadenew)
})


$('#editsav').click(function(){
 const editres =  $('#editres').val()
 const editidade =  $('#editidade').val()
 console.log(editres, editidade)
 })
 
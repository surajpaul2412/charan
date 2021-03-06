<?php
session_start();

if(isset($_POST['user_login'])){
    $_SESSION['name'] = $_POST['name'];
    $_SESSION['mobile'] = $_POST['mobile'];
    $_SESSION['state'] = $_POST['state'];
    $_SESSION['pincode'] = $_POST['pincode'];
    $_SESSION['district'] = $_POST['district'];
    header("location: centers.php");
}

?>
<!DOCTYPE html>
<html lang="hi">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>DeHaat | Insurance crop</title>
	<link rel="icon" href="https://www.agrevolution.in/assets/frontend/images/favicon.png" type="image" sizes="16x16">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<!-- custom css -->
	<link rel="stylesheet" type="text/css" href="css/style.css">
    <style>
        body, html{
            font-family: 'Montserrat', sans-serif;
        }
        .content{
            font-size: 14px;
        }
        .border-rounded{
        	border-radius: 8px;
        }
    </style>
</head>
<body class="bg-warning">
	<section class="d-block mx-auto bg-warning" style="max-width: 450px;">
		<section class="container">
			<div align="center">
				<div class="btn-violet px-0 py-1 mt-3 mx-65 border-radius-8" class="index.html">
					<img src="img/DeHaat_Logo.png" class="d-block mx-auto" width="55%">
				</div>
			</div>
		</section>
		<section class="container pt-2 pb-3">
			<div class="bg-white p-3 border-radius-8">
				<img src="images/banner.png" class="d-block mx-auto border-rounded" width="100%">
	            <h4 class="heading text-black pt-4 lh-1 font-weight-bold" align="center">
	                <span style="color: #128141;">??????????????? ????????? ???????????? ???????????? ?????? ????????? ???????????? ????????? ?????? ??????????????? ?????? ???????????? :</span>
	            </h4>
				<form class="mt-2" action="" method="post">
					<label>?????????<em>*</em></label>
					<input  type="text" class="form-control" name="name" fieldType=1 maxlength="255" value="" required/>

					<!--Phone-->
					<label>?????????????????? ????????????<em>*</em></label>
					<input type="tel" class="form-control" name="mobile" pattern="[0-9]*" maxlength="10" required/>
					<!--Single Line-->
					
					<!--Number-->
					<label>???????????????<em>*</em></label>
					<select name="state" class="form-control" required>
						<option value="">-- ???????????? ?????? ?????? ????????? ???????????? --</option>
						<option value="Bihar">Bihar</option>
						<option value="Jharkhand">Jharkhand</option>
						<option value="Uttar Pradesh">Uttar Pradesh</option>
					</select>

					<label>??????????????????<em>*</em></label>
					<input type="text" class="form-control" name="pincode" pattern="[0-9]*" minlength="5" maxlength="6" required/>

					
					<label>????????????</label>
					<input  type="text" class="form-control" name="district" maxlength="255"/>

					<button name="user_login" class="btn btn-success mt-3 w-100" type="submit">????????????????????? ????????? ????????????</button>
				</form>
			</div>
		</section>
	</section>
</body>
</html>

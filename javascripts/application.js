$(function(){
	/**
	 *	@param tipo: ENUM('acerto' || 'erro')
	 *  @param questao: int numero da questão
	 */
	function exibirFeedback(tipo, questao){
		$dialog = {
			modal:	true,
			buttons: {
				Ok:	function(){
					proxima();
					$(this).dialog("close");
				}
			},
		};
	
		$query = "#feedbeack_"+tipo+"_questao"+questao
		$element = $($query);
		$element.dialog($dialog);		
	}
	$("input[type='radio'].correto").click( function(){
		t = $(this).attr('name').split('_');
		t = t[1].substring(t[1].length -1 , t[1].length);
		exibirFeedback('acerto', t);
		
	});
	$("input[type='radio'].errado").click( function(){
		t = $(this).attr('name').split('_');
		t = t[1].substring(t[1].length -1 , t[1].length);
		exibirFeedback('erro', t);
	});
	
	
	function proxima(){
		$('#botao_avancar').trigger('click');
	}
	function voltar(){
		$('#botao_voltar').trigger('click');
	}
});

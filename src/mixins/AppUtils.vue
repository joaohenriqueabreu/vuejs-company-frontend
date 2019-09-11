<script>
export default {
    methods: {
        $isMobile: () => {
            console.log(navigator.userAgent)
            console.log(/Android|webOS|iPhone||iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            return /Android|webOS|iPhone||iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        },
        $isNumeric: value => value !== undefined && value !== '' && ! isNaN(value) && isFinite(value)
    }    
}
</script>
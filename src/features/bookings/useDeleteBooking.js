import { useMutation } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully deleted`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    // onSuccess: () => {
    //   toast.success("Booking successfully deleted");
    //   queryClient.invalidateQueries({
    //     queryKey: ["bookings"],
    //   });
    // },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isDeleting, deleteBooking };
}

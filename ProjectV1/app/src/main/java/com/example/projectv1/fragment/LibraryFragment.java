package com.example.projectv1.fragment;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.example.projectv1.MainActivity;
import com.example.projectv1.R;
import com.example.projectv1.base.BaseFragment;

public class LibraryFragment extends BaseFragment implements View.OnClickListener {
    private Button btnNtMain;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_library, container, false);
    }

    @Override
    protected int getLayoutResource() {
        return 0;
    }

    @Override
    public String getTitle() {
        return null;
    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        btnNtMain = getActivity().findViewById(R.id.btnNtMain);

        btnNtMain.setOnClickListener(this);
        getContext();
        getActivity();
    }


    @Override
    public void onClick(View v) {
        switch (v.getId()){

            case  R.id.btnNtMain:
                MainActivity act = (MainActivity) getActivity();
                act.showFragment(act.getFmMain());
                break;
        }
    }
}
